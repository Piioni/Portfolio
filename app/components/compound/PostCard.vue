<script setup lang="ts">
import type { PostSummary } from '@/types/content'

interface Props {
  post: PostSummary
}

defineProps<Props>()
</script>

<template>
  <BaseBubble variant="card" hoverable as="article">
    <NuxtLink :to="`/blog/${post.slug}`" class="group mb-2 block">
      <h3 class="text-lg font-semibold text-text-primary-light transition-colors group-hover:text-accent-lavender-light dark:text-text-primary-dark dark:group-hover:text-accent-lavender-dark">
        {{ post.title }}
      </h3>
    </NuxtLink>

    <p class="text-muted mb-4 grow text-sm">
      {{ post.description }}
    </p>

    <div class="mb-3 text-xs tracking-wide text-accent-lavender-light uppercase dark:text-accent-lavender-dark">
      {{ formatDate(post.publishedAt, { month: 'short', day: 'numeric', year: 'numeric' }) }}
    </div>

    <div class="mt-2 flex flex-wrap gap-2 border-t border-border-light pt-3 dark:border-border-dark">
      <BaseBadge v-for="tag in post.tags" :key="tag" :label="tag" />
    </div>
  </BaseBubble>
</template>
