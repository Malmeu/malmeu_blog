import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

const headers = { 'Content-Type': 'application/json' };

// GET: Récupérer les vues (par article ou pour tous les articles)
export const GET: APIRoute = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');

    if (!supabase) {
      if (slug) {
        return new Response(JSON.stringify({ slug, views: 0 }), { status: 200, headers });
      }
      return new Response(JSON.stringify({ totalViews: 0, viewsBySlug: {} }), { status: 200, headers });
    }

    if (slug) {
      const { data, error } = await supabase
        .from('article_views')
        .select('views_count')
        .eq('article_slug', slug)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.warn('Error fetching views for slug:', slug, error.message);
      }

      const views = data?.views_count ? Number(data.views_count) : 0;
      return new Response(JSON.stringify({ slug, views }), { status: 200, headers });
    }

    // Récupérer toutes les vues
    const { data, error } = await supabase
      .from('article_views')
      .select('article_slug, views_count');

    if (error) {
      console.warn('Error fetching all article views:', error.message);
      return new Response(JSON.stringify({ totalViews: 0, viewsBySlug: {} }), { status: 200, headers });
    }

    const viewsBySlug: Record<string, number> = {};
    let totalViews = 0;

    if (Array.isArray(data)) {
      for (const row of data) {
        const count = Number(row.views_count) || 0;
        viewsBySlug[row.article_slug] = count;
        totalViews += count;
      }
    }

    return new Response(JSON.stringify({ totalViews, viewsBySlug }), { status: 200, headers });
  } catch (err: any) {
    console.error('Views API GET error:', err);
    return new Response(JSON.stringify({ totalViews: 0, viewsBySlug: {} }), { status: 200, headers });
  }
};

// POST: Incrémenter le compteur de vues d'un article
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const slug = body?.slug;

    if (!slug || typeof slug !== 'string') {
      return new Response(JSON.stringify({ error: 'Slug invalide ou manquant' }), { status: 400, headers });
    }

    if (!supabase) {
      return new Response(JSON.stringify({ success: true, views: 1, note: 'Supabase not configured' }), { status: 200, headers });
    }

    // 1. Tenter l'appel RPC (le plus performant et atomique)
    const { data: rpcData, error: rpcError } = await supabase.rpc('increment_article_views', {
      slug: slug,
    });

    if (!rpcError && rpcData !== null && rpcData !== undefined) {
      return new Response(JSON.stringify({ success: true, slug, views: Number(rpcData) }), { status: 200, headers });
    }

    // 2. Fallback direct si la RPC n'a pas encore été créée
    const { data: existingRow } = await supabase
      .from('article_views')
      .select('views_count')
      .eq('article_slug', slug)
      .maybeSingle();

    const currentCount = existingRow?.views_count ? Number(existingRow.views_count) : 0;
    const newCount = currentCount + 1;

    const { error: upsertError } = await supabase
      .from('article_views')
      .upsert({
        article_slug: slug,
        views_count: newCount,
        updated_at: new Date().toISOString(),
      });

    if (upsertError) {
      console.warn('Fallback upsert failed for article_views:', upsertError.message);
      return new Response(JSON.stringify({ success: false, error: upsertError.message }), { status: 500, headers });
    }

    return new Response(JSON.stringify({ success: true, slug, views: newCount }), { status: 200, headers });
  } catch (err: any) {
    console.error('Views API POST error:', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500, headers });
  }
};
