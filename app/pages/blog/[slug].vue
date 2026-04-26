<script setup lang="ts">
const route = useRoute()

const slug = computed(() => String(route.params.slug))
const { data: post } = await usePostBySlugContent(slug)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: () => `${post.value?.title ?? 'Post'} | Juan Rangel`,
  description: () => post.value?.description ?? 'Blog post details',
  ogTitle: () => `${post.value?.title ?? 'Post'} | Juan Rangel`,
  ogDescription: () => post.value?.description ?? 'Blog post details',
  ogType: 'article',
})
</script>

<template>
  <BaseContainer>
    <article class="space-y-6">
      <header>
        <p class="mb-2 text-xs tracking-wider text-accent-lavender-light uppercase dark:text-accent-lavender-dark">
          {{ formatDate(post?.publishedAt || '', { month: 'long', day: 'numeric', year: 'numeric' }) }}
        </p>

        <h1 class="text-3xl font-bold text-text-primary-light dark:text-accent-lavender-dark">
          {{ post?.title }}
        </h1>

        <p class="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
          {{ post?.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <BaseBadge v-for="tag in post?.tags" :key="tag" :label="tag" />
        </div>
      </header>

      <BaseBubble variant="hero" as="section">
        <ContentRenderer :value="post" />
      </BaseBubble>
    </article>
  </BaseContainer>
</template>
