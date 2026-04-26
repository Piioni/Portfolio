export function usePostsContent() {
  return useAsyncData('posts:list', async () => {
    const posts = await queryCollection('posts').all()

    return posts.sort((a, b) => {
      if (a.publishedAt === b.publishedAt) {
        return a.title.localeCompare(b.title)
      }

      return a.publishedAt < b.publishedAt ? 1 : -1
    })
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
