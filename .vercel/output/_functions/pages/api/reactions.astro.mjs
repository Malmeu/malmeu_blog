export { renderers } from '../../renderers.mjs';

const headers = { "Content-Type": "application/json" };
const defaultCounts = { like: 0, love: 0, fire: 0, think: 0 };
const GET = async ({ url }) => {
  try {
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug requis" }), { status: 400, headers });
    }
    const supabaseUrl = "https://pzyyjsljzcnmbovbftmh.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk";
    if (!supabaseUrl || !supabaseKey) ;
    const res = await fetch(
      `${supabaseUrl}/rest/v1/post_reactions?article_slug=eq.${encodeURIComponent(slug)}&select=reaction_type`,
      {
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`
        }
      }
    );
    if (!res.ok) {
      return new Response(JSON.stringify(defaultCounts), { status: 200, headers });
    }
    const data = await res.json();
    const counts = {
      like: data.filter((r) => r.reaction_type === "like").length,
      love: data.filter((r) => r.reaction_type === "love").length,
      fire: data.filter((r) => r.reaction_type === "fire").length,
      think: data.filter((r) => r.reaction_type === "think").length
    };
    return new Response(JSON.stringify(counts), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify(defaultCounts), { status: 200, headers });
  }
};
const POST = async ({ request }) => {
  try {
    const { slug, reaction, fingerprint } = await request.json();
    if (!slug || !reaction || !fingerprint) {
      return new Response(JSON.stringify({ error: "Données manquantes" }), { status: 400, headers });
    }
    const supabaseUrl = "https://pzyyjsljzcnmbovbftmh.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk";
    if (!supabaseUrl || !supabaseKey) ;
    await fetch(
      `${supabaseUrl}/rest/v1/post_reactions?article_slug=eq.${encodeURIComponent(slug)}&user_fingerprint=eq.${encodeURIComponent(fingerprint)}`,
      {
        method: "DELETE",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`
        }
      }
    );
    await fetch(`${supabaseUrl}/rest/v1/post_reactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
