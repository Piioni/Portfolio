import type { IconId } from '../shared/icon-registry'

export interface ProjectSummary {
  id: string
  title: string
  slug: string
  description: string
  technologies: Array<{ id: IconId, label: string }>
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  order: number
}

export interface PostSummary {
  id: string
  title: string
  slug: string
  description: string
  publishedAt: string
  tags: string[]
}
