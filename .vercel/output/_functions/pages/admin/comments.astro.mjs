import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B6vaW939.mjs';
import { s as supabase } from '../../chunks/supabase_CADXvh8V.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Comments = createComponent(async ($$result, $$props, $$slots) => {
  let comments = [];
  if (supabase) {
    const { data: allComments, error } = await supabase.from("comments").select("*").order("created_at", { ascending: false });
    comments = allComments || [];
  } else {
    console.log("Supabase not configured - admin disabled");
  }
  const pendingCount = comments.filter((c) => c.status === "pending").length;
  const approvedCount = comments.filter((c) => c.status === "approved").length;
  const rejectedCount = comments.filter((c) => c.status === "rejected").length;
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  // Check authentication from localStorage
  const session = localStorage.getItem('admin_session');
  const expiry = localStorage.getItem('admin_session_expiry');
  
  // Redirect to login if not authenticated or session expired
  if (session !== 'authenticated' || !expiry || Date.now() > parseInt(expiry)) {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_session_expiry');
    window.location.href = '/admin/login';
  }
  
  import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
  
  // Supabase configuration
  const supabaseUrl = 'https://pzyyjsljzcnmbovbftmh.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk';
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // Approve comment
  window.approveComment = async (commentId) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status: 'approved' })
        .eq('id', commentId);
      
      if (error) throw error;
      // Reload page to show updated status
      window.location.reload();
    } catch (error) {
      console.error('Error approving comment:', error);
      alert('Erreur lors de l\\'approbation du commentaire.');
    }
  };
  
  // Reject comment
  window.rejectComment = async (commentId) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status: 'rejected' })
        .eq('id', commentId);
      
      if (error) throw error;
      // Reload page to show updated status
      window.location.reload();
    } catch (error) {
      console.error('Error rejecting comment:', error);
      alert('Erreur lors du rejet du commentaire.');
    }
  };

  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      // Clear the session from localStorage
      localStorage.removeItem('admin_session');
      localStorage.removeItem('admin_session_expiry');
      
      // Redirect to login page
      window.location.href = '/admin/login';
    });
  }
<\/script>`], ["", ` <script type="module">
  // Check authentication from localStorage
  const session = localStorage.getItem('admin_session');
  const expiry = localStorage.getItem('admin_session_expiry');
  
  // Redirect to login if not authenticated or session expired
  if (session !== 'authenticated' || !expiry || Date.now() > parseInt(expiry)) {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_session_expiry');
    window.location.href = '/admin/login';
  }
  
  import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
  
  // Supabase configuration
  const supabaseUrl = 'https://pzyyjsljzcnmbovbftmh.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXlqc2xqemNubWJvdmJmdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMjU4NjMsImV4cCI6MjA4MDgwMTg2M30.xq5pjLruOTEGBQ7Pr12C5X4iyHkCYCwH6HNwfYUCswk';
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // Approve comment
  window.approveComment = async (commentId) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status: 'approved' })
        .eq('id', commentId);
      
      if (error) throw error;
      // Reload page to show updated status
      window.location.reload();
    } catch (error) {
      console.error('Error approving comment:', error);
      alert('Erreur lors de l\\\\'approbation du commentaire.');
    }
  };
  
  // Reject comment
  window.rejectComment = async (commentId) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ status: 'rejected' })
        .eq('id', commentId);
      
      if (error) throw error;
      // Reload page to show updated status
      window.location.reload();
    } catch (error) {
      console.error('Error rejecting comment:', error);
      alert('Erreur lors du rejet du commentaire.');
    }
  };

  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      // Clear the session from localStorage
      localStorage.removeItem('admin_session');
      localStorage.removeItem('admin_session_expiry');
      
      // Redirect to login page
      window.location.href = '/admin/login';
    });
  }
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Administration des commentaires", "description": "Mod\xE9rez les commentaires du blog", "noIndex": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-12"> <!-- Header --> <header class="mb-8"> <div class="flex items-center justify-between mb-4"> <h1 class="text-4xl font-bold text-[var(--color-text)]">
🛡️ Administration des commentaires
</h1> <div class="flex items-center gap-4"> <a href="/admin/articles" class="px-4 py-2 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
📝 Gérer les articles
</a> <button id="logout-btn" class="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
🚪 Déconnexion
</button> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"> <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4"> <h3 class="text-yellow-400 font-semibold mb-2">⏳ En attente</h3> <p class="text-2xl font-bold text-[var(--color-text)]">${pendingCount}</p> </div> <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-4"> <h3 class="text-green-400 font-semibold mb-2">✅ Approuvés</h3> <p class="text-2xl font-bold text-[var(--color-text)]">${approvedCount}</p> </div> <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4"> <h3 class="text-red-400 font-semibold mb-2">❌ Rejetés</h3> <p class="text-2xl font-bold text-[var(--color-text)]">${rejectedCount}</p> </div> </div> </header> <!-- Comments List --> <div class="space-y-6"> ${supabase ? comments.length > 0 ? comments.map((comment) => renderTemplate`<div${addAttribute(`bg-[var(--color-bg-secondary)] rounded-xl p-6 border-l-4 ${comment.status === "pending" ? "border-l-yellow-500" : comment.status === "approved" ? "border-l-green-500" : "border-l-red-500"}`, "class")}> <div class="flex items-start justify-between gap-4"> <div class="flex-1"> <div class="flex items-center gap-3 mb-3"> <div class="w-10 h-10 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-orange)] rounded-full flex items-center justify-center"> <span class="text-white font-bold text-sm">${comment.name.substring(0, 2).toUpperCase()}</span> </div> <div> <h4 class="font-semibold text-[var(--color-text)]">${comment.name}</h4> <div class="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"> <span>${comment.email}</span> <span>•</span> <span>${new Date(comment.created_at).toLocaleDateString("fr-DZ")}</span> <span>•</span> <a${addAttribute(`/blog/${comment.article_slug}`, "href")} class="text-[var(--color-accent)] hover:underline"> ${comment.article_title} </a> </div> </div> </div> <div class="bg-[var(--color-bg)] rounded-lg p-4 mb-4"> <p class="text-[var(--color-text)] leading-relaxed whitespace-pre-wrap">${comment.content}</p> </div> <div class="flex items-center gap-2"> <span${addAttribute(`px-2 py-1 rounded-md text-xs font-medium ${comment.status === "pending" ? "bg-yellow-500/20 text-yellow-400" : comment.status === "approved" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`, "class")}> ${comment.status === "pending" ? "En attente" : comment.status === "approved" ? "Approuv\xE9" : "Rejet\xE9"} </span> </div> </div> ${comment.status === "pending" && renderTemplate`<div class="flex flex-col gap-2"> <button${addAttribute(`approveComment('${comment.id}')`, "onclick")} class="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
✅ Approuver
</button> <button${addAttribute(`rejectComment('${comment.id}')`, "onclick")} class="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
❌ Rejeter
</button> </div>`} ${comment.status !== "pending" && renderTemplate`<div class="flex flex-col gap-2"> ${comment.status === "approved" && renderTemplate`<button${addAttribute(`rejectComment('${comment.id}')`, "onclick")} class="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
❌ Rejeter
</button>`} ${comment.status === "rejected" && renderTemplate`<button${addAttribute(`approveComment('${comment.id}')`, "onclick")} class="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
✅ Approuver
</button>`} </div>`} </div> </div>`) : renderTemplate`<div class="text-center py-12 bg-[var(--color-bg-secondary)] rounded-xl"> <p class="text-[var(--color-text-muted)]">Aucun commentaire pour le moment.</p> </div>` : renderTemplate`<div class="text-center py-12 bg-[var(--color-bg-secondary)] rounded-xl"> <p class="text-[var(--color-text-muted)]">🔧 Supabase n'est pas configuré.</p> <p class="text-sm text-[var(--color-text-muted)] mt-2">Configurez les variables d'environnement pour activer la modération.</p> </div>`} </div> </div> ` }));
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/comments.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/comments.astro";
const $$url = "/admin/comments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Comments,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
