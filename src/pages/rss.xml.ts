import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  return rss({
    title: 'DevBlog - Blog technique',
    description: 'Blog technique sur le développement web, l\'IA, les SaaS et l\'entrepreneuriat tech depuis l\'Algérie.',
    site: context.site || 'https://votre-blog.vercel.app',
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: [post.data.category, ...(post.data.tags || [])],
      })),
    customData: `<language>fr-DZ</language>`,
  });
}
