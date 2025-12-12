import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_Cc9hNxfF.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Malmeu Dev Blog',
    description: 'Le blog tech d\'un développeur algérien : SaaS, IA et Freelance.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      // Lien vers l'article
      link: `/blog/${post.slug}/`,
    })),
    // (Optionnel) Langue du flux
    customData: `<language>fr-dz</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
