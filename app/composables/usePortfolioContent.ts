export function useSocialLinksContent() {
  return useAsyncData('portfolio:social-links', async () => {
    const document = await queryCollection('socialLinks').first()
    return document?.links ?? []
  })
}

export function useSkillGroupsContent() {
  return useAsyncData('portfolio:skill-groups', async () => {
    const document = await queryCollection('skillGroups').first()
    return document?.groups ?? []
  })
}

export function useExperiencesContent() {
  return useAsyncData('portfolio:experiences', async () => {
    const document = await queryCollection('experiences').first()
    return document?.items ?? []
  })
}

export function useInterestsContent() {
  return useAsyncData('portfolio:interests', async () => {
    const document = await queryCollection('interests').first()
    return document?.items ?? []
  })
}
