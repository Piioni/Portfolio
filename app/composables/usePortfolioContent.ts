import type {
  ExperienceItem,
  ExperiencesDocument,
  InterestItem,
  InterestsDocument,
  SkillGroupItem,
  SkillGroupsDocument,
  SocialLinkItem,
  SocialLinksDocument,
} from '@/types/content'

export function useSocialLinksContent() {
  return useAsyncData('portfolio:social-links', async () => {
    const document = await queryCollection('socialLinks').first() as SocialLinksDocument | null
    return document?.links ?? [] as SocialLinkItem[]
  })
}

export function useSkillGroupsContent() {
  return useAsyncData('portfolio:skill-groups', async () => {
    const document = await queryCollection('skillGroups').first() as SkillGroupsDocument | null
    return document?.groups ?? [] as SkillGroupItem[]
  })
}

export function useExperiencesContent() {
  return useAsyncData('portfolio:experiences', async () => {
    const document = await queryCollection('experiences').first() as ExperiencesDocument | null
    return document?.items ?? [] as ExperienceItem[]
  })
}

export function useInterestsContent() {
  return useAsyncData('portfolio:interests', async () => {
    const document = await queryCollection('interests').first() as InterestsDocument | null
    return document?.items ?? [] as InterestItem[]
  })
}
