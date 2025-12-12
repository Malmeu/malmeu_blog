import { s as supabase } from '../../chunks/supabase_CADXvh8V.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const email = body?.email;
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!supabase) {
      console.log(`Newsletter signup (no DB configured): ${email}`);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { error } = await supabase.from("newsletter_subscribers").upsert({ email }, { onConflict: "email" });
    if (error) {
      console.error("Newsletter Supabase error:", error);
      return new Response(JSON.stringify({ success: true, note: "saved_locally" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Newsletter error:", err);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
