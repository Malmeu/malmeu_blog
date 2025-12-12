import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_B6vaW939.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://malmeu.info");
const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate(_a || (_a = __template(["", ` <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script> <script>
  (function() {
    var session = localStorage.getItem('admin_session');
    var expiry = localStorage.getItem('admin_session_expiry');
    if (!(session === 'authenticated' && expiry && Date.now() < parseInt(expiry))) {
      window.location.href = '/admin/login';
      return;
    }

    var slug = document.getElementById('article-slug').value;
    var loadingEl = document.getElementById('loading');
    var editorEl = document.getElementById('editor-container');
    var titleEl = document.getElementById('title');
    var descriptionEl = document.getElementById('description');
    var categoryEl = document.getElementById('category');
    var publishDateEl = document.getElementById('publishDate');
    var tagsEl = document.getElementById('tags');
    var imageEl = document.getElementById('image');
    var draftEl = document.getElementById('draft');
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
        : '<p class="text-gray-500 italic">Pr\xE9visualisation...</p>';
    });

    window.insertMd = function(before, after) {
      var start = bodyEl.selectionStart, end = bodyEl.selectionEnd;
      var text = bodyEl.value, selected = text.substring(start, end);
      bodyEl.value = text.substring(0, start) + before + selected + after + text.substring(end);
      bodyEl.focus();
      bodyEl.setSelectionRange(start + before.length, start + before.length + selected.length);
      bodyEl.dispatchEvent(new Event('input'));
    };

    function loadArticle() {
      fetch('/api/articles').then(function(response) {
        return response.json();
      }).then(function(articles) {
        var article = articles.find(function(a) { return a.slug === slug; });
        
        if (!article) { loadingEl.textContent = 'Article non trouv\xE9'; return; }
        
        titleEl.value = article.title || '';
        descriptionEl.value = article.description || '';
        categoryEl.value = article.category || '';
        publishDateEl.value = article.publishDate || '';
        tagsEl.value = Array.isArray(article.tags) ? article.tags.join(', ') : '';
        imageEl.value = article.image || '';
        draftEl.checked = article.draft === true;
        featuredEl.checked = article.featured === true;
        sponsoredEl.checked = article.sponsored === true;
        sponsorNameEl.value = article.sponsorName || '';
        sponsorUrlEl.value = article.sponsorUrl || '';
        bodyEl.value = article.body || '';
        
        if (article.sponsored) sponsorFields.classList.remove('hidden');
        
        bodyEl.dispatchEvent(new Event('input'));
        loadingEl.classList.add('hidden');
        editorEl.classList.remove('hidden');
      }).catch(function() { loadingEl.textContent = 'Erreur'; });
    }

    function saveArticle() {
      if (!titleEl.value.trim()) { alert('Titre requis'); return; }
      
      var tags = tagsEl.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
      
      fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: slug,
          title: titleEl.value,
          description: descriptionEl.value,
          publishDate: publishDateEl.value,
          category: categoryEl.value || 'G\xE9n\xE9ral',
          tags: tags,
          image: imageEl.value,
          draft: draftEl.checked,
          featured: featuredEl.checked,
          sponsored: sponsoredEl.checked,
          sponsorName: sponsoredEl.checked ? sponsorNameEl.value : undefined,
          sponsorUrl: sponsoredEl.checked ? sponsorUrlEl.value : undefined,
          body: bodyEl.value,
        }),
      }).then(function(response) {
        if (response.ok) alert('\u2705 Sauvegard\xE9 !');
        else alert('Erreur');
      }).catch(function() { alert('Erreur'); });
    }

    document.getElementById('save-btn').addEventListener('click', saveArticle);
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveArticle(); }
    });

    loadArticle();
  })();
<\/script> `])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Modifier l'Article - Admin", "description": "Modifier un article", "noIndex": true, "data-astro-cid-ybtirnqx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-8" data-astro-cid-ybtirnqx> <input type="hidden" id="article-slug"${addAttribute(slug, "value")} data-astro-cid-ybtirnqx> <!-- Header --> <header class="mb-8 flex items-center justify-between" data-astro-cid-ybtirnqx> <div class="flex items-center gap-4" data-astro-cid-ybtirnqx> <a href="/admin/articles" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors" data-astro-cid-ybtirnqx>
← Retour
</a> <h1 class="text-2xl font-bold text-[var(--color-text)]" data-astro-cid-ybtirnqx>✏️ Modifier</h1> <span class="text-[var(--color-text-muted)] text-sm" data-astro-cid-ybtirnqx>(${slug}.md)</span> </div> <div class="flex items-center gap-3" data-astro-cid-ybtirnqx> <a${addAttribute(`/blog/${slug}`, "href")} target="_blank" class="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded-lg hover:text-white transition-colors" data-astro-cid-ybtirnqx>
👁️ Voir
</a> <button id="save-btn" class="px-5 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:opacity-90 transition-opacity" data-astro-cid-ybtirnqx>
💾 Sauvegarder
</button> </div> </header> <!-- Loading --> <div id="loading" class="text-center py-12 text-[var(--color-text-muted)]" data-astro-cid-ybtirnqx>
Chargement...
</div> <!-- Editor --> <div id="editor-container" class="hidden grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-ybtirnqx> <!-- Left --> <div class="space-y-6" data-astro-cid-ybtirnqx> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-6" data-astro-cid-ybtirnqx> <input type="text" id="title" class="w-full bg-transparent text-2xl font-bold text-[var(--color-text)] placeholder-gray-600 border-b border-[var(--color-bg)] pb-2 mb-4 focus:border-[var(--color-accent)] focus:outline-none" placeholder="Titre..." data-astro-cid-ybtirnqx> <textarea id="description" rows="2" class="w-full bg-transparent text-[var(--color-text-muted)] placeholder-gray-600 resize-none focus:outline-none" placeholder="Description..." data-astro-cid-ybtirnqx></textarea> </div> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-6" data-astro-cid-ybtirnqx> <h2 class="font-semibold text-[var(--color-text)] mb-4" data-astro-cid-ybtirnqx>⚙️ Paramètres</h2> <div class="grid grid-cols-2 gap-4 mb-4" data-astro-cid-ybtirnqx> <div data-astro-cid-ybtirnqx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-ybtirnqx>Catégorie</label> <input type="text" id="category" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" data-astro-cid-ybtirnqx> </div> <div data-astro-cid-ybtirnqx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-ybtirnqx>Date</label> <input type="date" id="publishDate" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" data-astro-cid-ybtirnqx> </div> </div> <div class="mb-4" data-astro-cid-ybtirnqx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-ybtirnqx>Tags</label> <input type="text" id="tags" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" data-astro-cid-ybtirnqx> </div> <div class="mb-4" data-astro-cid-ybtirnqx> <label class="block text-xs text-[var(--color-text-muted)] uppercase mb-1" data-astro-cid-ybtirnqx>Image</label> <input type="text" id="image" class="w-full px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" data-astro-cid-ybtirnqx> </div> <div class="flex items-center gap-6 pt-4 border-t border-[var(--color-bg)]" data-astro-cid-ybtirnqx> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-ybtirnqx> <input type="checkbox" id="draft" class="w-4 h-4 accent-yellow-500" data-astro-cid-ybtirnqx> <span class="text-sm text-yellow-400" data-astro-cid-ybtirnqx>📝 Brouillon</span> </label> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-ybtirnqx> <input type="checkbox" id="featured" class="w-4 h-4 accent-[var(--color-accent)]" data-astro-cid-ybtirnqx> <span class="text-sm text-[var(--color-text-muted)]" data-astro-cid-ybtirnqx>⭐ Vedette</span> </label> <label class="flex items-center gap-2 cursor-pointer" data-astro-cid-ybtirnqx> <input type="checkbox" id="sponsored" class="w-4 h-4 accent-amber-500" data-astro-cid-ybtirnqx> <span class="text-sm text-amber-400" data-astro-cid-ybtirnqx>💰 Sponsorisé</span> </label> </div> <div id="sponsor-fields" class="hidden mt-4 pt-4 border-t border-[var(--color-bg)] grid grid-cols-2 gap-4" data-astro-cid-ybtirnqx> <input type="text" id="sponsorName" class="px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" placeholder="Nom sponsor" data-astro-cid-ybtirnqx> <input type="url" id="sponsorUrl" class="px-3 py-2 bg-[var(--color-bg)] rounded-lg text-[var(--color-text)] focus:outline-none" placeholder="URL sponsor" data-astro-cid-ybtirnqx> </div> </div> <div class="bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden" data-astro-cid-ybtirnqx> <div class="flex items-center gap-1 px-4 py-2 border-b border-[var(--color-bg)]" data-astro-cid-ybtirnqx> <button onclick="insertMd('## ', '')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded" data-astro-cid-ybtirnqx>H2</button> <button onclick="insertMd('**', '**')" class="px-2 py-1 text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded" data-astro-cid-ybtirnqx>B</button> <button onclick="insertMd('*', '*')" class="px-2 py-1 text-sm italic text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded" data-astro-cid-ybtirnqx>I</button> <button onclick="insertMd('[', '](url)')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded" data-astro-cid-ybtirnqx>🔗</button> <button onclick="insertMd('\`', '\`')" class="px-2 py-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded" data-astro-cid-ybtirnqx>\`</button> </div> <textarea id="body" class="w-full px-4 py-4 bg-transparent text-[var(--color-text)] font-mono text-sm min-h-[400px] resize-none focus:outline-none" placeholder="Markdown..." data-astro-cid-ybtirnqx></textarea> </div> </div> <!-- Right --> <div class="hidden lg:block" data-astro-cid-ybtirnqx> <div class="bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden sticky top-24" data-astro-cid-ybtirnqx> <div class="px-4 py-2 border-b border-[var(--color-bg)] text-sm text-[var(--color-text-muted)]" data-astro-cid-ybtirnqx>👁️ Prévisualisation</div> <div id="preview" class="p-6 prose prose-invert max-w-none max-h-[600px] overflow-y-auto" data-astro-cid-ybtirnqx> <p class="text-gray-500 italic" data-astro-cid-ybtirnqx>Chargement...</p> </div> </div> </div> </div> </div> ` }));
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/[slug].astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/[slug].astro";
const $$url = "/admin/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
