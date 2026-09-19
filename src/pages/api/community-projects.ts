import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

const headers = { 'Content-Type': 'application/json' };

// Projets phares initiaux de l'écosystème tech algérien (utilisés aussi comme fallback)
export const initialProjects = [
  {
    id: '1',
    name: 'Yassir',
    slug: 'yassir',
    tagline: 'Super-App VTC, livraison et services financiers leader au Maghreb.',
    category: 'Mobile',
    url: 'https://yassir.com',
    creator_name: 'Noureddine Tayebi',
    creator_twitter: '@Yassir_Global',
    upvotes: 84,
    status: 'approved'
  },
  {
    id: '2',
    name: 'Chargily Pay',
    slug: 'chargily-pay',
    tagline: 'Passerelle de paiement en ligne intégrant Edahabia et CIB pour les développeurs et SaaS.',
    category: 'E-commerce & Paiement',
    url: 'https://chargily.com',
    creator_name: 'Tarek Baklem',
    creator_twitter: '@chargily',
    upvotes: 112,
    status: 'approved'
  },
  {
    id: '3',
    name: 'Maystro Delivery',
    slug: 'maystro-delivery',
    tagline: 'Plateforme SaaS logistique et tracking de colis automatisé pour e-commerçants.',
    category: 'SaaS B2B',
    url: 'https://maystro-delivery.com',
    creator_name: 'Kamel Haddar',
    creator_twitter: '@MaystroDelivery',
    upvotes: 49,
    status: 'approved'
  },
  {
    id: '4',
    name: 'Malmeu Dev Hub',
    slug: 'malmeu-dev-hub',
    tagline: 'Blog & boîte à outils pour développeurs SaaS et créateurs tech basés en Algérie.',
    category: 'Dev Tools',
    url: 'https://www.malmeu.info',
    creator_name: 'Malmeu',
    creator_twitter: '@Malmeu',
    upvotes: 68,
    status: 'approved'
  },
  {
    id: '5',
    name: 'Garini',
    slug: 'garini',
    tagline: 'Solution intelligente de stationnement et réservation de parking en Algérie.',
    category: 'Mobile',
    url: 'https://garini.dz',
    creator_name: 'Équipe Garini',
    creator_twitter: '',
    upvotes: 35,
    status: 'approved'
  },
  {
    id: '6',
    name: 'Dziria AI Prompts',
    slug: 'dziria-ai-prompts',
    tagline: 'Banque collaborative de prompts et modèles IA adaptés aux contextes culturels et pros algériens.',
    category: 'IA & ML',
    url: 'https://www.malmeu.info/blog/jai-teste-nano-banana-pro',
    creator_name: 'Communauté DZ',
    creator_twitter: '',
    upvotes: 56,
    status: 'approved'
  }
];

// GET: Récupérer les projets
export const GET: APIRoute = async ({ url }) => {
  try {
    const isAll = url.searchParams.get('all') === 'true';

    if (!supabase) {
      return new Response(JSON.stringify(initialProjects), { status: 200, headers });
    }

    let query = supabase
      .from('community_projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!isAll) {
      query = query.eq('status', 'approved');
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
      return new Response(JSON.stringify(initialProjects), { status: 200, headers });
    }

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (err: any) {
    console.error('Community projects API error:', err);
    return new Response(JSON.stringify(initialProjects), { status: 200, headers });
  }
};

// POST: Soumettre un projet
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, url, tagline, category, creator_name, creator_twitter, creator_email } = body;

    if (!name || !url || !tagline || !category) {
      return new Response(JSON.stringify({ error: 'Champs obligatoires manquants' }), { status: 400, headers });
    }

    const slug = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-' + Math.floor(Math.random() * 1000);

    if (supabase) {
      const { error } = await (supabase as any).from('community_projects').insert({
        name,
        slug,
        url,
        tagline,
        category,
        creator_name: creator_name || 'Anonyme',
        creator_twitter: creator_twitter || '',
        creator_email: creator_email || '',
        status: 'pending',
      });

      if (error) {
        console.warn('Failed to save project to Supabase:', error.message);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Projet soumis avec succès ! Il sera vérifié et validé très prochainement.' 
    }), { status: 201, headers });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Erreur lors de la soumission' }), { status: 500, headers });
  }
};

// PUT: Modérer un projet (Approuver / Rejeter)
export const PUT: APIRoute = async ({ request }) => {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return new Response(JSON.stringify({ error: 'Données manquantes' }), { status: 400, headers });
    }

    if (supabase) {
      const { error } = await (supabase as any)
        .from('community_projects')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500, headers });
  }
};

// DELETE: Supprimer un projet
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID manquant' }), { status: 400, headers });
    }

    if (supabase) {
      const { error } = await (supabase as any)
        .from('community_projects')
        .delete()
        .eq('id', id);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500, headers });
  }
};

