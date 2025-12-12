import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B6vaW939.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script>
  (function() {
    // Auth check
    var session = localStorage.getItem('admin_session');
    var expiry = localStorage.getItem('admin_session_expiry');
    if (!(session === 'authenticated' && expiry && Date.now() < parseInt(expiry))) {
      window.location.href = '/admin/login';
      return;
    }

    // Logout
    document.getElementById('logout-btn').addEventListener('click', function() {
      localStorage.removeItem('admin_session');
      localStorage.removeItem('admin_session_expiry');
      window.location.href = '/admin/login';
    });

    function loadArticles() {
      fetch('/api/articles').then(function(response) {
        return response.json();
      }).then(function(articles) {
        document.getElementById('stat-total').textContent = articles.length.toString();
        document.getElementById('stat-published').textContent = articles.filter(function(a) { return !a.draft; }).length.toString();
        document.getElementById('stat-drafts').textContent = articles.filter(function(a) { return a.draft; }).length.toString();
        document.getElementById('stat-sponsored').textContent = articles.filter(function(a) { return a.sponsored; }).length.toString();
        
        var listEl = document.getElementById('articles-list');
        
        if (articles.length === 0) {
          listEl.innerHTML = '<div class="px-6 py-12 text-center"><p class="text-gray-400 mb-4">Aucun article</p><a href="/admin/articles/new" class="text-cyan-400 hover:underline">Cr\xE9er \u2192</a></div>';
          return;
        }
        
        listEl.innerHTML = articles.map(function(article) {
          var statusBadge = article.draft 
            ? '<span class="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Brouillon</span>' 
            : '<span class="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Publi\xE9</span>';
          var featuredBadge = article.featured ? '<span class="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">\u2B50 Vedette</span>' : '';
          var sponsoredBadge = article.sponsored ? '<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">\u{1F4B0} Sponsoris\xE9</span>' : '';
          var categoryBadge = '<span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">' + (article.category || 'Sans cat\xE9gorie') + '</span>';
          var date = article.publishDate ? new Date(article.publishDate).toLocaleDateString('fr-FR') : '-';
          
          return '<div class="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">' +
            '<div class="flex-1 min-w-0">' +
              '<div class="flex items-center gap-2 mb-1 flex-wrap">' + statusBadge + featuredBadge + sponsoredBadge + categoryBadge + '</div>' +
              '<h3 class="font-medium text-white truncate">' + (article.title || 'Sans titre') + '</h3>' +
              '<p class="text-gray-500 text-sm truncate">' + (article.description || 'Pas de description') + '</p>' +
              '<p class="text-gray-600 text-xs mt-1">' + date + ' \xB7 ' + article.slug + '.md</p>' +
            '</div>' +
            '<div class="flex items-center gap-2 ml-4">' +
              '<a href="/blog/' + article.slug + '" target="_blank" class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10" title="Voir">\u{1F441}\uFE0F</a>' +
              '<a href="/admin/articles/' + article.slug + '" class="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-cyan-500/10" title="Modifier">\u270F\uFE0F</a>' +
              '<button onclick="deleteArticle(\\'' + article.slug + '\\')" class="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-500/10" title="Supprimer">\u{1F5D1}\uFE0F</button>' +
            '</div>' +
          '</div>';
        }).join('');
      }).catch(function(error) {
        console.error('Failed to load articles:', error);
        document.getElementById('articles-list').innerHTML = '<div class="px-6 py-12 text-center text-red-400">Erreur</div>';
      });
    }

    window.deleteArticle = function(slug) {
      if (!confirm('Supprimer "' + slug + '" ?')) return;
      fetch('/api/articles', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: slug }),
      }).then(function(response) {
        if (response.ok) loadArticles();
        else alert('Erreur');
      }).catch(function() { alert('Erreur'); });
    };

    loadArticles();
  })();
<\/script>`], ["", ` <script>
  (function() {
    // Auth check
    var session = localStorage.getItem('admin_session');
    var expiry = localStorage.getItem('admin_session_expiry');
    if (!(session === 'authenticated' && expiry && Date.now() < parseInt(expiry))) {
      window.location.href = '/admin/login';
      return;
    }

    // Logout
    document.getElementById('logout-btn').addEventListener('click', function() {
      localStorage.removeItem('admin_session');
      localStorage.removeItem('admin_session_expiry');
      window.location.href = '/admin/login';
    });

    function loadArticles() {
      fetch('/api/articles').then(function(response) {
        return response.json();
      }).then(function(articles) {
        document.getElementById('stat-total').textContent = articles.length.toString();
        document.getElementById('stat-published').textContent = articles.filter(function(a) { return !a.draft; }).length.toString();
        document.getElementById('stat-drafts').textContent = articles.filter(function(a) { return a.draft; }).length.toString();
        document.getElementById('stat-sponsored').textContent = articles.filter(function(a) { return a.sponsored; }).length.toString();
        
        var listEl = document.getElementById('articles-list');
        
        if (articles.length === 0) {
          listEl.innerHTML = '<div class="px-6 py-12 text-center"><p class="text-gray-400 mb-4">Aucun article</p><a href="/admin/articles/new" class="text-cyan-400 hover:underline">Cr\xE9er \u2192</a></div>';
          return;
        }
        
        listEl.innerHTML = articles.map(function(article) {
          var statusBadge = article.draft 
            ? '<span class="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Brouillon</span>' 
            : '<span class="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Publi\xE9</span>';
          var featuredBadge = article.featured ? '<span class="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">\u2B50 Vedette</span>' : '';
          var sponsoredBadge = article.sponsored ? '<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">\u{1F4B0} Sponsoris\xE9</span>' : '';
          var categoryBadge = '<span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">' + (article.category || 'Sans cat\xE9gorie') + '</span>';
          var date = article.publishDate ? new Date(article.publishDate).toLocaleDateString('fr-FR') : '-';
          
          return '<div class="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">' +
            '<div class="flex-1 min-w-0">' +
              '<div class="flex items-center gap-2 mb-1 flex-wrap">' + statusBadge + featuredBadge + sponsoredBadge + categoryBadge + '</div>' +
              '<h3 class="font-medium text-white truncate">' + (article.title || 'Sans titre') + '</h3>' +
              '<p class="text-gray-500 text-sm truncate">' + (article.description || 'Pas de description') + '</p>' +
              '<p class="text-gray-600 text-xs mt-1">' + date + ' \xB7 ' + article.slug + '.md</p>' +
            '</div>' +
            '<div class="flex items-center gap-2 ml-4">' +
              '<a href="/blog/' + article.slug + '" target="_blank" class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10" title="Voir">\u{1F441}\uFE0F</a>' +
              '<a href="/admin/articles/' + article.slug + '" class="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-cyan-500/10" title="Modifier">\u270F\uFE0F</a>' +
              '<button onclick="deleteArticle(\\\\'' + article.slug + '\\\\')" class="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-500/10" title="Supprimer">\u{1F5D1}\uFE0F</button>' +
            '</div>' +
          '</div>';
        }).join('');
      }).catch(function(error) {
        console.error('Failed to load articles:', error);
        document.getElementById('articles-list').innerHTML = '<div class="px-6 py-12 text-center text-red-400">Erreur</div>';
      });
    }

    window.deleteArticle = function(slug) {
      if (!confirm('Supprimer "' + slug + '" ?')) return;
      fetch('/api/articles', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: slug }),
      }).then(function(response) {
        if (response.ok) loadArticles();
        else alert('Erreur');
      }).catch(function() { alert('Erreur'); });
    };

    loadArticles();
  })();
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gestion des Articles - Admin", "description": "G\xE9rez vos articles", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-12"> <!-- Header --> <header class="mb-8"> <div class="flex items-center justify-between mb-6"> <div class="flex items-center gap-4"> <a href="/admin/comments" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
← Commentaires
</a> <h1 class="text-3xl font-bold text-[var(--color-text)]">
📝 Gestion des Articles
</h1> </div> <div class="flex items-center gap-3"> <a href="/admin/articles/new" class="px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:opacity-90 transition-opacity">
+ Nouvel Article
</a> <button id="logout-btn" class="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
Déconnexion
</button> </div> </div> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-accent)]/20"> <p class="text-[var(--color-text-muted)] text-sm">Total</p> <p id="stat-total" class="text-2xl font-bold text-[var(--color-text)]">-</p> </div> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-green-500/20"> <p class="text-[var(--color-text-muted)] text-sm">Publiés</p> <p id="stat-published" class="text-2xl font-bold text-green-400">-</p> </div> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-yellow-500/20"> <p class="text-[var(--color-text-muted)] text-sm">Brouillons</p> <p id="stat-drafts" class="text-2xl font-bold text-yellow-400">-</p> </div> <div class="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-amber-500/20"> <p class="text-[var(--color-text-muted)] text-sm">Sponsorisés</p> <p id="stat-sponsored" class="text-2xl font-bold text-amber-400">-</p> </div> </div> </header> <!-- Articles List --> <div class="bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden"> <div class="px-6 py-4 border-b border-[var(--color-bg)]/50"> <h2 class="font-semibold text-[var(--color-text)]">Tous les articles</h2> </div> <div id="articles-list" class="divide-y divide-[var(--color-bg)]/50"> <div class="px-6 py-12 text-center text-[var(--color-text-muted)]">
Chargement des articles...
</div> </div> </div> </div> ` }));
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/index.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/admin/articles/index.astro";
const $$url = "/admin/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
