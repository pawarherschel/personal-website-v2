// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  // @ts-ignore
  slug: ({id, defaultSlug}) => id ? id : defaultSlug,
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};