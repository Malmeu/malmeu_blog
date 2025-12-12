export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const headers = { "Content-Type": "application/json" };
  try {
    const body = await request.json();
    const email = body?.email;
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email invalide" }), { status: 400, headers });
    }
    const supabaseUrl = "https://pzyyjsljzcnmbovbftmh.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk";
    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify({ email })
      });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
