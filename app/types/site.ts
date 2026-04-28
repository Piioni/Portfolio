import type { IconId } from '../shared/icon-registry'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email'

export interface SocialLinkItem {
  id: string
  platform: SocialPlatform
  url: string
  label: string
}

export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'devops' | 'tooling'

export interface SkillItem {
  id: IconId
  name: string
  category: SkillCategory
}

export interface SkillGroupItem {
  category: SkillCategory
  label: string
  skills: SkillItem[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  highlights?: string[]
  technologies: Array<{ id: IconId, label: string }>
}

export interface InterestItem {
  id: IconId
  label: string
}
