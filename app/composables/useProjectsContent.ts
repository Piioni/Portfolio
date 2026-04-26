import type { ProjectSummary } from '@/types/content'

function toProjectSummary(project: {
  id: string
  title: string
  slug: string
  description: string
  technologies?: ProjectSummary['technologies']
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  order?: number
}): ProjectSummary {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    technologies: project.technologies ?? [],
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured ?? false,
    order: project.order ?? 99,
  }
}

export function useProjectsContent() {
  return useAsyncData('projects:list', async () => {
    const projects = await queryCollection('projects')
      .select('id', 'title', 'slug', 'description', 'technologies', 'githubUrl', 'liveUrl', 'featured', 'order')
      .order('featured', 'DESC')
      .order('order', 'ASC')
      .all()

    return projects.map(toProjectSummary)
  })
}

export function useFeaturedProjectsContent(limit = 3) {
  return useAsyncData('projects:featured', async () => {
    const featuredProjects = await queryCollection('projects')
      .select('id', 'title', 'slug', 'description', 'technologies', 'githubUrl', 'liveUrl', 'featured', 'order')
      .where('featured', '=', true)
      .order('order', 'ASC')
      .all()

    return featuredProjects.slice(0, limit).map(toProjectSummary)
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
