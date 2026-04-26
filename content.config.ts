import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        githubUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        featured: z.boolean().default(false),
      }),
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        publishedAt: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    }),
  },
})
