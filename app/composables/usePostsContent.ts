import type { PostDetail, PostSummary } from '@/types/content'

function toPostSummary(post: PostDetail): PostSummary {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.description,
    publishedAt: post.publishedAt,
    tags: post.tags,
  }
}

export function usePostsContent() {
  return useAsyncData('posts:list', async () => {
    const posts = await queryCollection('posts')
      .select('id', 'title', 'slug', 'description', 'publishedAt', 'tags')
      .where('draft', '=', false)
      .order('publishedAt', 'DESC')
      .all() as PostDetail[]

    return posts.map(toPostSummary)
  })
}

export function usePostBySlugContent(slug: MaybeRefOrGetter<string>) {
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `posts:${slugValue.value}`,
    () => queryCollection('posts').where('slug', '=', slugValue.value).first() as Promise<PostDetail | null>,
    {
      watch: [slugValue],
    },
  )
}
