import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B6vaW939.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page non trouv\xE9e - 404", "description": "La page que vous recherchez n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9e.", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[70vh] flex items-center justify-center px-4"> <div class="text-center max-w-lg"> <!-- 404 Number --> <div class="relative mb-8"> <span class="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] opacity-20">
404
</span> <div class="absolute inset-0 flex items-center justify-center"> <span class="text-6xl">🔍</span> </div> </div> <!-- Message --> <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
Page non trouvée
</h1> <p class="text-lg text-[var(--color-text-muted)] mb-8">
Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
</p> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
← Retour à l'accueil
</a> <a href="/blog" class="px-6 py-3 bg-[var(--color-bg-secondary)] text-[var(--color-text)] font-medium rounded-lg hover:bg-[var(--color-bg-secondary)]/80 transition-colors border border-[var(--color-bg-secondary)]">
Voir le blog
</a> </div> <!-- Suggestions --> <div class="mt-12 pt-8 border-t border-[var(--color-bg-secondary)]"> <p class="text-sm text-[var(--color-text-muted)] mb-4">
Vous cherchez peut-être :
</p> <div class="flex flex-wrap gap-2 justify-center"> <a href="/blog" class="px-3 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded-full hover:text-[var(--color-accent)] transition-colors">
Articles
</a> <a href="/about" class="px-3 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded-full hover:text-[var(--color-accent)] transition-colors">
À propos
</a> <a href="/contact" class="px-3 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded-full hover:text-[var(--color-accent)] transition-colors">
Contact
</a> </div> </div> </div> </div> ` })}`;
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/404.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
