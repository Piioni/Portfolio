import type { PostSummary } from '@/types/content'

function toPostSummary(post: {
  id: string
  title: string
  slug: string
  description: string
  publishedAt: string
  tags?: string[]
}): PostSummary {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.description,
    publishedAt: post.publishedAt,
    tags: post.tags ?? [],
  }
}

export function usePostsContent() {
  return useAsyncData('posts:list', async () => {
    const posts = await queryCollection('posts')
      .select('id', 'title', 'slug', 'description', 'publishedAt', 'tags')
      .where('draft', '=', false)
      .order('publishedAt', 'DESC')
      .all()

    return posts.map(toPostSummary)
  })
}

export function usePostBySlugContent(slug: MaybeRefOrGetter<string>) {
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `posts:${slugValue.value}`,
    () => queryCollection('posts').where('slug', '=', slugValue.value).first(),
    {
      watch: [slugValue],
    },
  )
}
