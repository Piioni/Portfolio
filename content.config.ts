import { defineCollection, defineContentConfig, z } from '@nuxt/content'

import { ICON_IDS } from './shared/icon-registry'

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const iconIdSchema = z.enum(ICON_IDS)

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string().min(1),
        slug: z.string().regex(SLUG_REGEX, 'Slug must be kebab-case'),
        description: z.string().min(1),
        technologies: z.array(z.object({
          id: iconIdSchema,
          label: z.string().min(1),
        })).min(1),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        order: z.number().int().nonnegative().default(99),
      }),
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string().min(1),
        slug: z.string().regex(SLUG_REGEX, 'Slug must be kebab-case'),
        description: z.string().min(1),
        publishedAt: z.union([z.string(), z.date()])
          .transform(value => typeof value === 'string' ? value : value.toISOString().slice(0, 10))
          .refine(value => ISO_DATE_REGEX.test(value), 'publishedAt must be YYYY-MM-DD'),
        tags: z.array(z.string().min(1)).default([]),
        draft: z.boolean().default(false),
      }),
    }),
    socialLinks: defineCollection({
      type: 'data',
      source: 'portfolio/social-links.yml',
      schema: z.object({
        links: z.array(z.object({
          id: z.string().min(1),
          platform: z.enum(['github', 'linkedin', 'twitter', 'email']),
          url: z.string().refine(
            value => value.startsWith('mailto:') || z.string().url().safeParse(value).success,
            'url must be a valid URL or mailto: URI',
          ),
          label: z.string().min(1),
        })).min(1),
      }),
    }),
    skillGroups: defineCollection({
      type: 'data',
      source: 'portfolio/skill-groups.yml',
      schema: z.object({
        groups: z.array(z.object({
          category: z.enum(['frontend', 'backend', 'mobile', 'devops', 'tooling']),
          label: z.string().min(1),
          skills: z.array(z.object({
            id: iconIdSchema,
            name: z.string().min(1),
            category: z.enum(['frontend', 'backend', 'mobile', 'devops', 'tooling']),
          })).min(1),
        })).min(1),
      }),
    }),
    experiences: defineCollection({
      type: 'data',
      source: 'portfolio/experiences.yml',
      schema: z.object({
        items: z.array(z.object({
          id: z.string().min(1),
          company: z.string().min(1),
          role: z.string().min(1),
          startDate: z.string().regex(/^\d{4}-\d{2}$/, 'startDate must be YYYY-MM'),
          endDate: z.string().regex(/^\d{4}-\d{2}$/, 'endDate must be YYYY-MM').optional(),
          description: z.string().min(1),
          highlights: z.array(z.string().min(1)).optional(),
          technologies: z.array(z.object({
            id: iconIdSchema,
            label: z.string().min(1),
          })).min(1),
        })).min(1),
      }),
    }),
    interests: defineCollection({
      type: 'data',
      source: 'portfolio/interests.yml',
      schema: z.object({
        items: z.array(z.object({
          id: iconIdSchema,
          label: z.string().min(1),
        })).min(1),
      }),
    }),
  },
})
