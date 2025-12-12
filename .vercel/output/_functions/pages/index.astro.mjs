import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B6vaW939.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_D-VVAaLD.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Cc9hNxfF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://malmeu.info");
const $$FeaturedCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedCard;
  const { title, description, slug, image, category, publishDate, readingTime } = Astro2.props;
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("fr-DZ", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  };
  return renderTemplate`${maybeRenderHead()}<article class="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] hover:shadow-2xl hover:shadow-[var(--color-accent)]/20 transition-all duration-500 hover:-translate-y-2" data-astro-cid-rksxk3bj> <!-- Badge Featured --> <div class="absolute top-4 left-4 z-10" data-astro-cid-rksxk3bj> <span class="px-3 py-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] text-white text-xs font-bold rounded-full uppercase tracking-wider" data-astro-cid-rksxk3bj>
⭐ En vedette
</span> </div> <!-- Image --> <div class="relative h-48 overflow-hidden" data-astro-cid-rksxk3bj> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" data-astro-cid-rksxk3bj> <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)]/80 to-transparent" data-astro-cid-rksxk3bj></div> </div> <!-- Content --> <div class="p-6" data-astro-cid-rksxk3bj> <!-- Meta --> <div class="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-3" data-astro-cid-rksxk3bj> <span class="px-2 py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-md font-medium" data-astro-cid-rksxk3bj> ${category} </span> <span data-astro-cid-rksxk3bj>${formatDate(publishDate)}</span> <span data-astro-cid-rksxk3bj>•</span> <span data-astro-cid-rksxk3bj>${readingTime} min de lecture</span> </div> <!-- Title --> <h3 class="text-xl font-bold text-[var(--color-text)] mb-3 line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors" data-astro-cid-rksxk3bj> ${title} </h3> <!-- Description --> <p class="text-[var(--color-text-muted)] mb-4 line-clamp-3 leading-relaxed" data-astro-cid-rksxk3bj> ${description} </p> <!-- Read more --> <a${addAttribute(`/blog/${slug}`, "href")} class="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-orange)] transition-colors group" data-astro-cid-rksxk3bj>
Lire l'article
<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rksxk3bj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-rksxk3bj></path> </svg> </a> </div> </article> `;
}, "/Users/Apple/Desktop/malmeu/blog/src/components/FeaturedCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  const featuredPosts = allPosts.filter((post) => post.data.featured).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 3);
  const recentPosts = allPosts.filter((post) => !post.data.featured).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 6);
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };
  const categories = [
    { name: "Dev Web", slug: "dev-web", icon: "\u{1F4BB}", description: "D\xE9veloppement frontend et backend" },
    { name: "IA-ML", slug: "ia-ml", icon: "\u{1F916}", description: "Intelligence artificielle et Machine Learning" },
    { name: "SaaS", slug: "saas", icon: "\u2601\uFE0F", description: "Software as a Service et produits" },
    { name: "Business", slug: "business", icon: "\u{1F4C8}", description: "Entrepreneuriat et strat\xE9gie" },
    { name: "Alg\xE9rie Tech", slug: "algerie-tech", icon: "\u{1F1E9}\u{1F1FF}", description: "\xC9cosyst\xE8me tech alg\xE9rien" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Malmeu | Blog Tech Alg\xE9rie - D\xE9veloppement Web, IA & SaaS", "description": "Blog tech depuis l'Alg\xE9rie \u{1F1E9}\u{1F1FF} Tutoriels d\xE9veloppement web, intelligence artificielle, cr\xE9ation de SaaS et entrepreneuriat tech. Conseils pratiques pour d\xE9veloppeurs." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-20 px-4 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-orange)]/10"></div> <div class="max-w-4xl mx-auto text-center relative z-10"> <!-- Mascotte --> <div class="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-orange)] p-1 animate-fade-in"> <img src="/malme.webp" alt="Malmeu - Développeur" class="w-full h-full rounded-full object-cover"> </div> <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style="animation-delay: 0.1s;"> <span class="text-[var(--color-text)]">Salut, je suis </span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)]">
Malmeu
</span> </h1> <p class="text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto animate-fade-in" style="animation-delay: 0.1s;">
Je partage mes idées, astuces et retours d'expérience sur le développement web, l'IA, les SaaS et l'entrepreneuriat tech depuis l'Algérie.
</p> <div class="flex flex-wrap justify-center gap-4 animate-fade-in" style="animation-delay: 0.2s;"> <a href="/blog" class="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:opacity-90 transition-opacity">
Lire le blog
</a> <a href="/about" class="px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-medium hover:bg-[var(--color-accent)]/10 transition-colors">
À propos de moi
</a> </div> </div> </section>  ${featuredPosts.length > 0 && renderTemplate`<section class="py-16 px-4 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-orange)]/5"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
⭐ Articles en vedette
</h2> <p class="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
Les articles les plus populaires et pertinents que vous ne voulez pas manquer.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "FeaturedCard", $$FeaturedCard, { "title": post.data.title, "description": post.data.description, "slug": post.slug, "image": post.data.image, "category": post.data.category, "publishDate": post.data.publishDate, "readingTime": calculateReadingTime(post.body) })}`)} </div> </div> </section>`} <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <div class="flex items-center justify-between mb-8"> <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
Articles récents
</h2> <a href="/blog" class="text-[var(--color-accent)] hover:text-[var(--color-accent-orange)] transition-colors font-medium">
Voir tous →
</a> </div> ${recentPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "publishDate": post.data.publishDate, "category": post.data.category, "image": post.data.image, "slug": post.slug, "tags": post.data.tags })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-[var(--color-bg-secondary)] rounded-xl"> <p class="text-[var(--color-text-muted)]">Aucun article pour le moment. Revenez bientôt !</p> </div>`} </div> </section>  <section class="py-16 px-4 bg-[var(--color-bg-secondary)]"> <div class="max-w-6xl mx-auto"> <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8 text-center">
Catégories
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${cat.slug}`, "href")} class="group p-6 bg-[var(--color-bg)] rounded-xl hover:shadow-lg hover:shadow-[var(--color-accent)]/10 transition-all duration-300 hover:-translate-y-1 text-center"> <span class="text-4xl mb-4 block">${cat.icon}</span> <h3 class="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors mb-2"> ${cat.name} </h3> <p class="text-xs text-[var(--color-text-muted)]">${cat.description}</p> </a>`)} </div> </div> </section>  <section class="py-20 px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
Restons en contact
</h2> <p class="text-[var(--color-text-muted)] mb-8">
Vous avez une question ou souhaitez collaborer ? N'hésitez pas à me contacter.
</p> <a href="/contact" class="inline-block px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
Me contacter
</a> </div> </section> ` })}`;
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/index.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
