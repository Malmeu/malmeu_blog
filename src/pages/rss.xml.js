import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
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
