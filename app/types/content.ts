import type { IconId } from '../../shared/icon-registry'
import type {
  ExperienceItem,
  InterestItem,
  SkillGroupItem,
  SocialLinkItem,
} from '@/types/site'

export type {
  ExperienceItem,
  InterestItem,
  SkillGroupItem,
  SocialLinkItem,
}

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

export interface ProjectDetail extends ProjectSummary {
  body?: unknown
}

export interface PostSummary {
  id: string
  title: string
  slug: string
  description: string
  publishedAt: string
  tags: string[]
}

export interface PostDetail extends PostSummary {
  body?: unknown
}

export interface SocialLinksDocument {
  links: SocialLinkItem[]
}

export interface SkillGroupsDocument {
  groups: SkillGroupItem[]
}

export interface ExperiencesDocument {
  items: ExperienceItem[]
}

export interface InterestsDocument {
  items: InterestItem[]
}
