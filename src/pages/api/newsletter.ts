import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };
  
  try {
    const body = await request.json();
    const email = body?.email;
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), { status: 400, headers });
    }
    
    // Supabase via fetch direct
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.log('Newsletter: Missing Supabase env vars');
      return new Response(JSON.stringify({ success: true, db: false }), { status: 200, headers });
    }
    
    const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({ email })
    });
    
    if (!res.ok) {
      const error = await res.text();
      console.log('Newsletter Supabase error:', error);
      return new Response(JSON.stringify({ success: true, db: false, error }), { status: 200, headers });
    }
    
    return new Response(JSON.stringify({ success: true, db: true }), { status: 200, headers });
  } catch (err) {
    console.log('Newsletter error:', err);
    return new Response(JSON.stringify({ success: true, db: false }), { status: 200, headers });
  }
};
