import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

// GET: Récupérer les compteurs de réactions pour un article
export const GET: APIRoute = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');
    
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug requis' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    if (!supabase) {
      // Fallback si Supabase n'est pas configuré
      return new Response(JSON.stringify({ 
        like: 0, love: 0, fire: 0, think: 0 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const { data, error } = await supabase
      .from('post_reactions')
      .select('reaction_type')
      .eq('article_slug', slug);
    
    if (error) {
      console.error('Supabase error:', error);
      // Retourner des valeurs par défaut au lieu d'une erreur 500
      return new Response(JSON.stringify({ 
        like: 0, love: 0, fire: 0, think: 0 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const counts = {
      like: (data || []).filter(r => r.reaction_type === 'like').length,
      love: (data || []).filter(r => r.reaction_type === 'love').length,
      fire: (data || []).filter(r => r.reaction_type === 'fire').length,
      think: (data || []).filter(r => r.reaction_type === 'think').length
    };
    
    return new Response(JSON.stringify(counts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Reactions GET error:', err);
    return new Response(JSON.stringify({ 
      like: 0, love: 0, fire: 0, think: 0 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// POST: Ajouter ou modifier une réaction
export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, reaction, fingerprint } = await request.json();
    
    if (!slug || !reaction || !fingerprint) {
      return new Response(JSON.stringify({ error: 'Données manquantes' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    if (!supabase) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Vérifier si l'utilisateur a déjà réagi
    const { data: existing } = await supabase
      .from('post_reactions')
      .select('id, reaction_type')
      .eq('article_slug', slug)
      .eq('user_fingerprint', fingerprint)
      .single();
    
    if (existing) {
      if (existing.reaction_type === reaction) {
        // Même réaction = supprimer (toggle off)
        await supabase
          .from('post_reactions')
          .delete()
          .eq('id', existing.id);
      } else {
        // Réaction différente = mettre à jour
        await supabase
          .from('post_reactions')
          .update({ reaction_type: reaction })
          .eq('id', existing.id);
      }
    } else {
      // Nouvelle réaction
      await supabase
        .from('post_reactions')
        .insert({
          article_slug: slug,
          reaction_type: reaction,
          user_fingerprint: fingerprint
        });
    }
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
