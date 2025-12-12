import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };
  
  try {
    const body = await request.json();
    const email = body?.email;
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), { status: 400, headers });
    }
    
    const apiKey = import.meta.env.SYSTEME_IO_API_KEY;
    
    if (!apiKey) {
      console.log('Newsletter: Missing Systeme.io API key');
      return new Response(JSON.stringify({ success: false, error: 'Configuration manquante' }), { status: 500, headers });
    }
    
    // Ajouter le contact à Systeme.io
    const res = await fetch('https://api.systeme.io/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey
      },
      body: JSON.stringify({
        email: email,
        tags: [{ name: 'blog-newsletter' }]
      })
    });
    
    if (!res.ok) {
      const error = await res.text();
      console.log('Systeme.io error:', error);
      
      // Si le contact existe déjà, c'est OK
      if (res.status === 422) {
        return new Response(JSON.stringify({ success: true, message: 'Déjà inscrit' }), { status: 200, headers });
      }
      
      return new Response(JSON.stringify({ success: false, error: 'Erreur inscription' }), { status: 500, headers });
    }
    
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    console.log('Newsletter error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Erreur serveur' }), { status: 500, headers });
  }
};
