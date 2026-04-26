export function useProjectsContent() {
  return useAsyncData('projects:list', async () => {
    const projects = await queryCollection('projects').all()

    return projects.sort((a, b) => {
      if (a.featured === b.featured) {
        return a.title.localeCompare(b.title)
      }

      return a.featured ? -1 : 1
    })
  })
}

export function useFeaturedProjectsContent(limit = 3) {
  return useAsyncData('projects:featured', async () => {
    const projects = await queryCollection('projects').all()

    return projects
      .filter(project => project.featured)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, limit)
  })
}

export function useProjectBySlugContent(slug: MaybeRefOrGetter<string>) {
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `projects:${slugValue.value}`,
    () => queryCollection('projects').where('slug', '=', slugValue.value).first(),
    {
      watch: [slugValue],
    },
  )
}
