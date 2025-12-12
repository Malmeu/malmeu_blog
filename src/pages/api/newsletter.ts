import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };
  
  try {
    const body = await request.json();
    const email = body?.email;
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), { status: 400, headers });
    }
    
    // Supabase via fetch direct (évite les problèmes d'import)
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({ email })
      });
    }
    
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }
};
