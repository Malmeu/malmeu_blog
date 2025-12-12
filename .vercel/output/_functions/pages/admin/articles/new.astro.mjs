import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_B6vaW939.mjs';
/* empty css                                     */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script> <script>
  // Auth check
  (function() {
    var session = localStorage.getItem('admin_session');
    var expiry = localStorage.getItem('admin_session_expiry');
    if (!(session === 'authenticated' && expiry && Date.now() < parseInt(expiry))) {
      window.location.href = '/admin/login';
      return;
    }

    var titleEl = document.getElementById('title');
    var descriptionEl = document.getElementById('description');
    var categoryEl = document.getElementById('category');
    var tagsEl = document.getElementById('tags');
    var imageEl = document.getElementById('image');
    var featuredEl = document.getElementById('featured');
    var sponsoredEl = document.getElementById('sponsored');
    var sponsorFields = document.getElementById('sponsor-fields');
    var sponsorNameEl = document.getElementById('sponsorName');
    var sponsorUrlEl = document.getElementById('sponsorUrl');
    var bodyEl = document.getElementById('body');
    var previewEl = document.getElementById('preview');

    sponsoredEl.addEventListener('change', function() {
      sponsorFields.classList.toggle('hidden', !sponsoredEl.checked);
    });

    bodyEl.addEventListener('input', function() {
      previewEl.innerHTML = bodyEl.value.trim() 
        ? window.marked.parse(bodyEl.value)
        : '<p class="text-gray-500 italic">La pr\xE9visualisation appara\xEEtra ici...</p>';
    });

    window.insertMd = function(before, after) {
      var start = bodyEl.selectionStart, end = bodyEl.selectionEnd;
      var text = bodyEl.value, selected = text.substring(start, end);
      bodyEl.value = text.substring(0, start) + before + selected + after + text.substring(end);
      bodyEl.focus();
      bodyEl.setSelectionRange(start + before.length, start + before.length + selected.length);
      bodyEl.dispatchEvent(new Event('input'));
    };

    function saveArticle(isDraft) {
      if (!titleEl.value.trim()) { alert('Titre requis'); return; }
      if (!descriptionEl.value.trim()) { alert('Description requise'); return; }
      
      var tags = tagsEl.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
      
      fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: titleEl.value,
          description: descriptionEl.value,
          category: categoryEl.value || 'G\xE9n\xE9ral',
          tags: tags,
          image: imageEl.value || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
          draft: isDraft,
          featured: featuredEl.checked,
          sponsored: sponsoredEl.checked,
          sponsorName: sponsoredEl.checked ? sponsorNameEl.value : undefined,
          sponsorUrl: sponsoredEl.checked ? sponsorUrlEl.value : undefined,
          body: bodyEl.value,
        }),
      }).then(function(response) {
        if (response.ok) window.location.href = '/admin/articles';
        else alert('Erreur');
      }).catch(function() { alert('Erreur'); });
    }

    document.getElementById('save-draft-btn').addEventListener('click', function() { saveArticle(true); });
    document.getElementById('publish-btn').addEventListener('click', function() { saveArticle(false); });
    
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveArticle(true); }
    });
  })();
<\/script> `])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Nouvel Article - Admin", "description": "Cr\xE9er un nouvel article", "noIndex": true, "data-astro-cid-y7wmjtyx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-8" data-astro-cid-y7wmjtyx> <!-- Header --> <header class="mb-8 flex items-center justify-between" data-astro-cid-y7wmjtyx> <div class="flex items-center gap-4" data-astro-cid-y7wmjtyx> <a href="/admin/articles" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors" data-astro-cid-y7wmjtyx>
← Retour
</a> <h1 class="text-2xl font-bold text-[var(--color-text)]" data-astro-cid-y7wmjtyx>✨ Nouvel Article</h1> </div> <div class="flex items-center gap-3" data-astro-cid-y7wmjtyx> <button id="save-draft-btn" class="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors" data-astro-cid-y7wmjtyx>
📝 Brouillon
</button> <button id="publish-btn" class="px-5 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:opacity-90 transition-opacity" data-astro-cid-y7wmjtyx>
🚀 Publier
</button> </div> </header> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-y7wmjtyx> <!-- Editor --> <div class="space-y-6" data-astro-cid-y7wmjtyx> <!-- Title & Description --> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-6" data-astro-cid-y7wmjtyx> <input type="text" id="title" class="w-full bg-transparent text-2xl font-bold text-[var(--color-text)] placeholder-gray-600 border-b border-[var(--color-bg)] pb-2 mb-4 focus:border-[var(--color-accent)] focus:outline-none" placeholder="Titre de l'article..." data-astro-cid-y7wmjtyx> <textarea id="description" rows="2" class="w-full bg-transparent text-[var(--color-text-muted)] placeholder-gray-600 resize-none focus:outline-none" placeholder="Description courte..." data-astro-cid-y7wmjtyx></textarea> </div> <!-- Metadata --> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-6" data-astro-cid-y7wmjtyx> <h2 class="font-semibold text-[var(--color-text)] mb-4" data-astro-cid-y7wmjtyx>⚙️ Paramètres</h2> <div class="grid grid-cols-2 gap-4 mb-4" data-astro-cid-y7wmjtyx> <div data-astro-cid-y7wmjtyx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-y7wmjtyx>Catégorie</label> <input type="text" id="category" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" placeholder="Tech" data-astro-cid-y7wmjtyx> </div> <div data-astro-cid-y7wmjtyx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-y7wmjtyx>Tags</label> <input type="text" id="tags" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" placeholder="react, js" data-astro-cid-y7wmjtyx> </div> </div> <div class="mb-4" data-astro-cid-y7wmjtyx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-y7wmjtyx>Image</label> <input type="text" id="image" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" placeholder="https://..." data-astro-cid-y7wmjtyx> </div> <div class="flex items-center gap-6 pt-4 border-t border-[var(--color-bg)]" data-astro-cid-y7wmjtyx> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-y7wmjtyx> <input type="checkbox" id="featured" class="w-4 h-4 accent-[var(--color-accent)]" data-astro-cid-y7wmjtyx> <span class="text-sm text-[var(--color-text-muted)]" data-astro-cid-y7wmjtyx>⭐ En vedette</span> </label> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-y7wmjtyx> <input type="checkbox" id="sponsored" class="w-4 h-4 accent-amber-500" data-astro-cid-y7wmjtyx> <span class="text-sm text-amber-400" data-astro-cid-y7wmjtyx>💰 Sponsorisé</span> </label> </div> <div id="sponsor-fields" class="hidden mt-4 pt-4 border-t border-[var(--color-bg)] grid grid-cols-2 gap-4" data-astro-cid-y7wmjtyx> <input type="text" id="sponsorName" class="px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-gray-600 focus:outline-none" placeholder="Nom sponsor" data-astro-cid-y7wmjtyx> <input type="url" id="sponsorUrl" class="px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] placeholder-gray-600 focus:outline-none" placeholder="URL sponsor" data-astro-cid-y7wmjtyx> </div> </div> <!-- Editor --> <div class="bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden" data-astro-cid-y7wmjtyx> <div class="flex items-center gap-1 px-4 py-2 border-b border-[var(--color-bg)] bg-[var(--color-bg)]/50" data-astro-cid-y7wmjtyx> <button onclick="insertMd('## ', '')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>H2</button> <button onclick="insertMd('**', '**')" class="px-2 py-1 text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>B</button> <button onclick="insertMd('*', '*')" class="px-2 py-1 text-sm italic text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>I</button> <button onclick="insertMd('[', '](url)')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>🔗</button> <button onclick="insertMd('\`', '\`')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>\`</button> <button onclick="insertMd('\n\`\`\`\n', '\n\`\`\`')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded" data-astro-cid-y7wmjtyx>\`\`\`</button> </div> <textarea id="body" class="w-full px-4 py-4 bg-transparent text-[var(--color-text)] font-mono text-sm min-h-[400px] resize-none focus:outline-none" placeholder="Écrivez en Markdown..." data-astro-cid-y7wmjtyx></textarea> </div> </div> <!-- Preview --> <div class="hidden lg:block" data-astro-cid-y7wmjtyx> <div class="bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden sticky top-24" data-astro-cid-y7wmjtyx> <div class="px-4 py-2 border-b border-[var(--color-bg)] text-sm text-[var(--color-text-muted)]" data-astro-cid-y7wmjtyx>
👁️ Prévisualisation
</div> <div id="preview" class="p-6 prose prose-invert max-w-none max-h-[600px] overflow-y-auto" data-astro-cid-y7wmjtyx> <p class="text-gray-500 italic" data-astro-cid-y7wmjtyx>La prévisualisation apparaîtra ici...</p> </div> </div> </div> </div> </div> ` }));
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/new.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/new.astro";
const $$url = "/admin/articles/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
