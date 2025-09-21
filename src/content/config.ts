import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion("external", [
    // markdown posts
    z.object({
      external: z.literal(false),
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      ogImagePath: z.string().optional(),
      canonicalUrl: z.string().optional(),
    }),
    // external link posts
    z.object({
      external: z.literal(true),
      title: z.string(),
      date: z.date(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      url: z.string(),
    }),
  ]),
});

export const collections = {
  posts: postsCollection,
};