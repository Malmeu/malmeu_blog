import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, r as renderComponent, e as renderScript, d as addAttribute, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_BUXZWwQS.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="relative" id="search-container"> <button id="search-trigger" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-muted)] text-sm"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <span class="hidden sm:inline">Rechercher...</span> <kbd class="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-[var(--color-bg)] rounded border border-[var(--color-bg-tertiary)]"> <span>\u2318</span>K
</kbd> </button> </div> <!-- Search Modal --> <div id="search-modal" class="fixed inset-0 z-50 hidden"> <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" id="search-backdrop"></div> <div class="relative max-w-2xl mx-auto mt-20 mx-4"> <div class="bg-[var(--color-bg)] rounded-2xl shadow-2xl border border-[var(--color-bg-secondary)] overflow-hidden"> <div class="p-4 border-b border-[var(--color-bg-secondary)]"> <div class="flex items-center gap-3"> <svg class="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <input type="text" id="search-input" placeholder="Rechercher un article..." class="flex-1 bg-transparent text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none text-lg" autocomplete="off"> <button id="search-close" class="p-1 rounded hover:bg-[var(--color-bg-secondary)] transition-colors"> <svg class="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div id="search-results" class="max-h-96 overflow-y-auto p-2"> <p class="text-center text-[var(--color-text-muted)] py-8">
Tapez pour rechercher...
</p> </div> </div> </div> </div> <script>
  (function() {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const backdrop = document.getElementById('search-backdrop');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    
    let pagefind = null;
    
    async function loadPagefind() {
      if (!pagefind) {
        try {
          pagefind = await import('/pagefind/pagefind.js');
          await pagefind.init();
        } catch (e) {
          console.log('Pagefind not available yet (run build first)');
        }
      }
      return pagefind;
    }
    
    function openSearch() {
      modal?.classList.remove('hidden');
      input?.focus();
      document.body.style.overflow = 'hidden';
    }
    
    function closeSearch() {
      modal?.classList.add('hidden');
      document.body.style.overflow = '';
      if (input) input.value = '';
      if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Tapez pour rechercher...</p>';
    }
    
    trigger?.addEventListener('click', openSearch);
    backdrop?.addEventListener('click', closeSearch);
    closeBtn?.addEventListener('click', closeSearch);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') {
        closeSearch();
      }
    });
    
    // Search functionality
    let debounceTimer;
    
    input?.addEventListener('input', async () => {
      clearTimeout(debounceTimer);
      const query = input.value.trim();
      
      if (!query) {
        if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Tapez pour rechercher...</p>';
        return;
      }
      
      debounceTimer = setTimeout(async () => {
        const pf = await loadPagefind();
        
        if (!pf) {
          if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Recherche non disponible</p>';
          return;
        }
        
        const search = await pf.search(query);
        
        if (search.results.length === 0) {
          if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Aucun r\xE9sultat trouv\xE9</p>';
          return;
        }
        
        const items = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
        
        if (results) {
          results.innerHTML = items.map((item) => \`
            <a href="\${item.url}" class="block p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 class="font-medium" style="color: var(--color-text)">\${item.meta?.title || 'Sans titre'}</h3>
              <p class="text-sm mt-1 line-clamp-2" style="color: var(--color-text-muted)">\${item.excerpt}</p>
            </a>
          \`).join('');
        }
      }, 200);
    });
  })();
<\/script>`], ["", `<div class="relative" id="search-container"> <button id="search-trigger" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-muted)] text-sm"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <span class="hidden sm:inline">Rechercher...</span> <kbd class="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-[var(--color-bg)] rounded border border-[var(--color-bg-tertiary)]"> <span>\u2318</span>K
</kbd> </button> </div> <!-- Search Modal --> <div id="search-modal" class="fixed inset-0 z-50 hidden"> <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" id="search-backdrop"></div> <div class="relative max-w-2xl mx-auto mt-20 mx-4"> <div class="bg-[var(--color-bg)] rounded-2xl shadow-2xl border border-[var(--color-bg-secondary)] overflow-hidden"> <div class="p-4 border-b border-[var(--color-bg-secondary)]"> <div class="flex items-center gap-3"> <svg class="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <input type="text" id="search-input" placeholder="Rechercher un article..." class="flex-1 bg-transparent text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none text-lg" autocomplete="off"> <button id="search-close" class="p-1 rounded hover:bg-[var(--color-bg-secondary)] transition-colors"> <svg class="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div id="search-results" class="max-h-96 overflow-y-auto p-2"> <p class="text-center text-[var(--color-text-muted)] py-8">
Tapez pour rechercher...
</p> </div> </div> </div> </div> <script>
  (function() {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const backdrop = document.getElementById('search-backdrop');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    
    let pagefind = null;
    
    async function loadPagefind() {
      if (!pagefind) {
        try {
          pagefind = await import('/pagefind/pagefind.js');
          await pagefind.init();
        } catch (e) {
          console.log('Pagefind not available yet (run build first)');
        }
      }
      return pagefind;
    }
    
    function openSearch() {
      modal?.classList.remove('hidden');
      input?.focus();
      document.body.style.overflow = 'hidden';
    }
    
    function closeSearch() {
      modal?.classList.add('hidden');
      document.body.style.overflow = '';
      if (input) input.value = '';
      if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Tapez pour rechercher...</p>';
    }
    
    trigger?.addEventListener('click', openSearch);
    backdrop?.addEventListener('click', closeSearch);
    closeBtn?.addEventListener('click', closeSearch);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') {
        closeSearch();
      }
    });
    
    // Search functionality
    let debounceTimer;
    
    input?.addEventListener('input', async () => {
      clearTimeout(debounceTimer);
      const query = input.value.trim();
      
      if (!query) {
        if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Tapez pour rechercher...</p>';
        return;
      }
      
      debounceTimer = setTimeout(async () => {
        const pf = await loadPagefind();
        
        if (!pf) {
          if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Recherche non disponible</p>';
          return;
        }
        
        const search = await pf.search(query);
        
        if (search.results.length === 0) {
          if (results) results.innerHTML = '<p class="text-center py-8" style="color: var(--color-text-muted)">Aucun r\xE9sultat trouv\xE9</p>';
          return;
        }
        
        const items = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
        
        if (results) {
          results.innerHTML = items.map((item) => \\\`
            <a href="\\\${item.url}" class="block p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 class="font-medium" style="color: var(--color-text)">\\\${item.meta?.title || 'Sans titre'}</h3>
              <p class="text-sm mt-1 line-clamp-2" style="color: var(--color-text-muted)">\\\${item.excerpt}</p>
            </a>
          \\\`).join('');
        }
      }, 200);
    });
  })();
<\/script>`])), maybeRenderHead());
}, "/Users/Apple/Desktop/malmeu/blog/src/components/Search.astro", void 0);

const $$Astro$2 = createAstro("https://malmeu.info");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "\xC0 propos" },
    { href: "/contact", label: "Contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-bg-secondary)]"> <nav class="max-w-6xl mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <!-- Logo --> <a href="/" class="flex items-center gap-2 group"> <img src="/logo_malm.webp" alt="Malmeu Logo" class="h-10 w-auto"> <span class="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors"></span> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-sm font-medium transition-colors ${currentPath === link.href ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"}`, "class")}> ${link.label} </a>`)} <!-- Search --> ${renderComponent($$result, "Search", $$Search, {})} <!-- Theme Toggle --> <button onclick="toggleTheme()" class="p-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)]/20 transition-colors" aria-label="Changer le thème"> <svg class="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg bg-[var(--color-bg-secondary)]" aria-label="Menu"> <svg class="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4"> <div class="flex flex-col gap-4"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-sm font-medium transition-colors ${currentPath === link.href ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"}`, "class")}> ${link.label} </a>`)} <button onclick="toggleTheme()" class="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg>
Changer le thème
</button> </div> </div> </nav> </header> ${renderScript($$result, "/Users/Apple/Desktop/malmeu/blog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Apple/Desktop/malmeu/blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Malmeu",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sofiane-boudjada-a9960512b/",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    },
    {
      name: "ComeUp",
      href: "https://comeup.com/fr/@sofianeboudjada",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    }
  ];
  const footerLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "\xC0 propos" },
    { href: "/contact", label: "Contact" },
    { href: "/rss.xml", label: "RSS" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[var(--color-bg-secondary)] border-t border-[var(--color-bg-secondary)]"> <div class="max-w-6xl mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Brand --> <div> <a href="/" class="flex items-center gap-2 mb-4"> <img src="/logo_malm.webp" alt="Malmeu Logo" class="h-10 w-auto"> <span class="text-xl font-bold text-[var(--color-text)]"></span> </a> <p class="text-[var(--color-text-muted)] text-sm">
Blog technique sur le développement web, l'IA, les SaaS et l'entrepreneuriat tech depuis l'Algérie.
</p> </div> <!-- Links --> <div> <h3 class="text-[var(--color-text)] font-semibold mb-4">Navigation</h3> <ul class="space-y-2"> ${footerLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm"> ${link.label} </a> </li>`)} </ul> </div> <!-- Social --> <div> <h3 class="text-[var(--color-text)] font-semibold mb-4">Réseaux sociaux</h3> <div class="flex gap-4"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-[var(--color-bg)] hover:bg-[var(--color-accent)]/20 transition-colors"${addAttribute(social.name, "aria-label")}> <svg class="w-5 h-5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24"> <path${addAttribute(social.icon, "d")}></path> </svg> </a>`)} </div> </div> </div> <!-- Copyright --> <div class="mt-12 pt-8 border-t border-[var(--color-bg)] text-center"> <p class="text-[var(--color-text-muted)] text-sm">
© ${currentYear} Malmeu. Tous droits réservés. Fait avec ❤️ depuis l'espace.
</p> </div> </div> </footer>`;
}, "/Users/Apple/Desktop/malmeu/blog/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://malmeu.info");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/Apple/Desktop/malmeu/blog/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Apple/Desktop/malmeu/blog/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://malmeu.info");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    image = "/og-default.svg",
    type = "website",
    publishDate,
    author = "Malmeu",
    noIndex = false,
    tags = [],
    category = "",
    readingTime = 0,
    wordCount = 0
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImageURL = new URL(image, Astro2.site);
  const siteUrl = Astro2.site?.toString() || "https://malmeu.info";
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Malmeu Dev Blog",
    "description": "Le blog tech d'un d\xE9veloppeur alg\xE9rien : SaaS, IA et Freelance.",
    "url": siteUrl,
    "inLanguage": "fr-DZ",
    "publisher": {
      "@type": "Person",
      "name": "Malmeu",
      "url": siteUrl
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const articleSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalURL.toString()
    },
    "headline": title,
    "description": description,
    "image": ogImageURL.toString(),
    "author": {
      "@type": "Person",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Malmeu Dev Blog",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo_malm.webp`
      }
    },
    "datePublished": publishDate?.toISOString(),
    "dateModified": publishDate?.toISOString(),
    "inLanguage": "fr-DZ",
    ...tags.length > 0 && { "keywords": tags.join(", ") },
    ...category && { "articleSection": category },
    ...wordCount > 0 && { "wordCount": wordCount },
    ...readingTime > 0 && { "timeRequired": `PT${readingTime}M` }
  } : null;
  const breadcrumbSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalURL.toString()
      }
    ]
  } : null;
  return renderTemplate(_c || (_c = __template(['<html lang="fr-DZ" data-theme="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/webp" href="/logo_malm.webp"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="canonical"', '><!-- Google Search Console Verification --><meta name="google-site-verification" content="Ksqriu5LJRJzCSOPlW_pmQqvbLsW6Oi-cBP3U5Fl5bs"><!-- SEO Meta Tags -->', '<!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="fr_DZ"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Article specific -->", '<!-- hreflang --><link rel="alternate" hreflang="fr-DZ"', '><link rel="alternate" hreflang="x-default"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet"><!-- Schema.org --><script type="application/ld+json">', "<\/script>", "", "", '</head> <body class="min-h-screen flex flex-col"> ', ' <main class="flex-1"> ', " </main> ", " ", " ", " </body> </html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(canonicalURL, "href"), noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), type === "article" && publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate.toISOString(), "content")}>`, addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), unescapeHTML(JSON.stringify(websiteSchema)), articleSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(articleSchema))), breadcrumbSchema && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Analytics", $$Index, {}), renderScript($$result, "/Users/Apple/Desktop/malmeu/blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/Apple/Desktop/malmeu/blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Index as a };
