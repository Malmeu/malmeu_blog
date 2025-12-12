import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BUXZWwQS.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://malmeu.info");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, description, publishDate, category, image, slug, tags, sponsored, sponsorName } = Astro2.props;
  const readingTime = Math.ceil(description.length / 100) + 3;
  return renderTemplate`${maybeRenderHead()}<article class="group bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[var(--color-accent)]/10 transition-all duration-300 hover:-translate-y-1" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}`, "href")} class="block" data-astro-cid-e3grugc2> <!-- Image --> <div class="relative h-48 overflow-hidden" data-astro-cid-e3grugc2> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-e3grugc2> <div class="absolute top-4 left-4 flex gap-2" data-astro-cid-e3grugc2> ${sponsored && renderTemplate`<span class="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-medium" data-astro-cid-e3grugc2>
💰 Sponsorisé
</span>`} <span class="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full text-xs font-medium" data-astro-cid-e3grugc2> ${category} </span> </div> </div> <!-- Content --> <div class="p-6" data-astro-cid-e3grugc2> <div class="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-3" data-astro-cid-e3grugc2> <time${addAttribute(publishDate.toISOString(), "datetime")} data-astro-cid-e3grugc2> ${publishDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> <span data-astro-cid-e3grugc2>•</span> <span data-astro-cid-e3grugc2>${readingTime} min de lecture</span> </div> <h3 class="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2" data-astro-cid-e3grugc2> ${title} </h3> <p class="text-[var(--color-text-muted)] text-sm line-clamp-3 mb-4" data-astro-cid-e3grugc2> ${description} </p> ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2" data-astro-cid-e3grugc2> ${tags.slice(0, 3).map((tag) => renderTemplate`<span class="px-2 py-1 bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded text-xs" data-astro-cid-e3grugc2>
#${tag} </span>`)} </div>`} </div> </a> </article> `;
}, "/Users/Apple/Desktop/malmeu/blog/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
