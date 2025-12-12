import type { APIRoute } from 'astro';

// Simple in-memory storage for demo - replace with Supabase or other DB
const subscribers = new Set<string>();

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // TODO: Replace with actual database storage (Supabase)
    // Example with Supabase:
    // const { error } = await supabase.from('newsletter').insert({ email });
    
    subscribers.add(email);
    console.log(`New subscriber: ${email}`);
    
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
