export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface NavLinkItem {
  label: string
  href: string
}

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email'

export interface SocialLinkItem {
  id: string
  platform: SocialPlatform
  url: string
  label: string
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devtools' | 'os'

export interface SkillItem {
  id: string
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
  technologies: Array<{ id: string, label: string }>
}

export interface InterestItem {
  id: string
  label: string
}
