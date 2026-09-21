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
    // Auteur
    author: z.string().default('Malmeu'),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    // Sponsoring
    sponsored: z.boolean().default(false),
    sponsorName: z.string().optional(),
    sponsorUrl: z.string().url().optional(),
    sponsorLogo: z.string().optional(),
  }),
});

const testsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    productName: z.string(),
    brand: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    price: z.string(),
    priceCurrency: z.string().default('DZD'),
    priceRaw: z.number().optional(),
    rating: z.number().min(0).max(10),
    verdict: z.string(),
    award: z.string().optional(),
    testedPeriod: z.string().default('3 semaines d’usage intensif'),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    ratingsBreakdown: z.object({
      design: z.number().min(0).max(10).optional(),
      performance: z.number().min(0).max(10).optional(),
      autonomy: z.number().min(0).max(10).optional(),
      features: z.number().min(0).max(10).optional(),
      valueForMoney: z.number().min(0).max(10).optional(),
    }).optional(),
    specs: z.record(z.string()).optional(),
    buyUrl: z.string().url().optional(),
    buyLabel: z.string().default('Voir le produit / Disponibilité'),
    author: z.string().default('Malmeu'),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  tests: testsCollection,
};
