import type { ProjectDetail, ProjectSummary } from '@/types/content'

function toProjectSummary(project: ProjectDetail): ProjectSummary {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured,
    order: project.order,
  }
}

export function useProjectsContent() {
  return useAsyncData('projects:list', async () => {
    const featuredProjects = await queryCollection('projects')
      .select('id', 'title', 'slug', 'description', 'technologies', 'githubUrl', 'liveUrl', 'featured', 'order')
      .where('featured', '=', true)
      .order('order', 'ASC')
      .all() as ProjectDetail[]

    const regularProjects = await queryCollection('projects')
      .select('id', 'title', 'slug', 'description', 'technologies', 'githubUrl', 'liveUrl', 'featured', 'order')
      .where('featured', '=', false)
      .order('order', 'ASC')
      .all() as ProjectDetail[]

    return [...featuredProjects, ...regularProjects].map(toProjectSummary)
  })
}

export function useFeaturedProjectsContent(limit = 3) {
  return useAsyncData('projects:featured', async () => {
    const featuredProjects = await queryCollection('projects')
      .select('id', 'title', 'slug', 'description', 'technologies', 'githubUrl', 'liveUrl', 'featured', 'order')
      .where('featured', '=', true)
      .order('order', 'ASC')
      .all() as ProjectDetail[]

    return featuredProjects
      .slice(0, limit)
      .map(toProjectSummary)
  })
}

export function useProjectBySlugContent(slug: MaybeRefOrGetter<string>) {
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `projects:${slugValue.value}`,
    () => queryCollection('projects').where('slug', '=', slugValue.value).first() as Promise<ProjectDetail | null>,
    {
      watch: [slugValue],
    },
  )
}
