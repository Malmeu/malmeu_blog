import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    // Sponsoring
    sponsored: z.boolean().default(false),
    sponsorName: z.string().optional(),
    sponsorUrl: z.string().url().optional(),
    sponsorLogo: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
