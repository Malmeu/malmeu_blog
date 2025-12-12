import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

function getSupabase() {
  const url = "https://pzyyjsljzcnmbovbftmh.supabase.co";
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk";
  return createClient(url, key);
}
const GET = async ({ url }) => {
  try {
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug requis" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const supabase = getSupabase();
    if (!supabase) {
      return new Response(JSON.stringify({
        like: 0,
        love: 0,
        fire: 0,
        think: 0
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data, error } = await supabase.from("post_reactions").select("reaction_type").eq("article_slug", slug);
    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({
        like: 0,
        love: 0,
        fire: 0,
        think: 0
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const counts = {
      like: (data || []).filter((r) => r.reaction_type === "like").length,
      love: (data || []).filter((r) => r.reaction_type === "love").length,
      fire: (data || []).filter((r) => r.reaction_type === "fire").length,
      think: (data || []).filter((r) => r.reaction_type === "think").length
    };
    return new Response(JSON.stringify(counts), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Reactions GET error:", err);
    return new Response(JSON.stringify({
      like: 0,
      love: 0,
      fire: 0,
      think: 0
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const { slug, reaction, fingerprint } = await request.json();
    if (!slug || !reaction || !fingerprint) {
      return new Response(JSON.stringify({ error: "Données manquantes" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const supabase = getSupabase();
    if (!supabase) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data: existing } = await supabase.from("post_reactions").select("id, reaction_type").eq("article_slug", slug).eq("user_fingerprint", fingerprint).single();
    if (existing) {
      if (existing.reaction_type === reaction) {
        await supabase.from("post_reactions").delete().eq("id", existing.id);
      } else {
        await supabase.from("post_reactions").update({ reaction_type: reaction }).eq("id", existing.id);
      }
    } else {
      await supabase.from("post_reactions").insert({
        article_slug: slug,
        reaction_type: reaction,
        user_fingerprint: fingerprint
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
