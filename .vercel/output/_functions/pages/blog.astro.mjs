import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BUXZWwQS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B6vaW939.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_D-VVAaLD.mjs';
import { g as getCollection } from '../chunks/_astro_content_Cc9hNxfF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  const posts = allPosts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const categoryCount = posts.reduce((acc, post) => {
    const cat = post.data.category;
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | Articles Tech - D\xE9veloppement, IA & SaaS | Malmeu", "description": "Articles et tutoriels sur le d\xE9veloppement web, l'intelligence artificielle, la cr\xE9ation de SaaS et l'entrepreneuriat tech. Conseils pratiques depuis l'Alg\xE9rie \u{1F1E9}\u{1F1FF}" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-12"> <!-- Header --> <header class="mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
Blog
</h1> <p class="text-xl text-[var(--color-text-muted)]"> ${posts.length} article${posts.length > 1 ? "s" : ""} sur le développement, l'IA et l'entrepreneuriat tech.
</p> </header> <!-- Categories Filter --> ${Object.keys(categoryCount).length > 0 && renderTemplate`<div class="mb-8 flex flex-wrap gap-2"> <a href="/blog" class="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full text-sm font-medium">
Tous (${posts.length})
</a> ${Object.entries(categoryCount).map(([category, count]) => renderTemplate`<a${addAttribute(`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded-full text-sm font-medium hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-colors"> ${category} (${count})
</a>`)} </div>`} <!-- Posts Grid --> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "publishDate": post.data.publishDate, "category": post.data.category, "image": post.data.image, "slug": post.slug, "tags": post.data.tags, "sponsored": post.data.sponsored, "sponsorName": post.data.sponsorName })}`)} </div>` : renderTemplate`<div class="text-center py-20 bg-[var(--color-bg-secondary)] rounded-xl"> <h2 class="text-2xl font-bold text-[var(--color-text)] mb-4">Aucun article pour le moment</h2> <p class="text-[var(--color-text-muted)]">Revenez bientôt pour découvrir de nouveaux contenus !</p> </div>`} </div> ` })}`;
}, "/Users/Apple/Desktop/malmeu/blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/Apple/Desktop/malmeu/blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
