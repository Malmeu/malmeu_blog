import type { APIRoute } from 'astro';

const headers = { 'Content-Type': 'application/json' };
const defaultCounts = { like: 0, love: 0, fire: 0, think: 0 };

// GET: Récupérer les compteurs de réactions
export const GET: APIRoute = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug requis' }), { status: 400, headers });
    }
    
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return new Response(JSON.stringify(defaultCounts), { status: 200, headers });
    }
    
    const res = await fetch(
      `${supabaseUrl}/rest/v1/post_reactions?article_slug=eq.${encodeURIComponent(slug)}&select=reaction_type`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      }
    );
    
    if (!res.ok) {
      return new Response(JSON.stringify(defaultCounts), { status: 200, headers });
    }
    
    const data = await res.json();
    const counts = {
      like: data.filter((r: any) => r.reaction_type === 'like').length,
      love: data.filter((r: any) => r.reaction_type === 'love').length,
      fire: data.filter((r: any) => r.reaction_type === 'fire').length,
      think: data.filter((r: any) => r.reaction_type === 'think').length
    };
    
    return new Response(JSON.stringify(counts), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify(defaultCounts), { status: 200, headers });
  }
};

// POST: Ajouter une réaction
export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, reaction, fingerprint } = await request.json();
    
    if (!slug || !reaction || !fingerprint) {
      return new Response(JSON.stringify({ error: 'Données manquantes' }), { status: 400, headers });
    }
    
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }
    
    // Supprimer l'ancienne réaction si elle existe
    await fetch(
      `${supabaseUrl}/rest/v1/post_reactions?article_slug=eq.${encodeURIComponent(slug)}&user_fingerprint=eq.${encodeURIComponent(fingerprint)}`,
      {
        method: 'DELETE',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      }
    );
    
    // Ajouter la nouvelle réaction
    await fetch(`${supabaseUrl}/rest/v1/post_reactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({
        article_slug: slug,
        reaction_type: reaction,
        user_fingerprint: fingerprint
      })
    });
    
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }
};
