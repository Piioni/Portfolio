<script setup lang="ts">
import type { ProjectSummary } from '@/types/content'

interface Props {
  project: ProjectSummary
}

defineProps<Props>()
</script>

<template>
  <BaseBubble variant="card" hoverable as="article">
    <NuxtLink :to="`/projects/${project.slug}`" class="group mb-2 block">
      <h3 class="text-lg font-semibold text-text-primary-light transition-colors group-hover:text-accent-lavender-light dark:text-text-primary-dark dark:group-hover:text-accent-lavender-dark">
        {{ project.title }}
      </h3>
    </NuxtLink>

    <p class="text-muted mb-4 grow text-sm">
      {{ project.description }}
    </p>

    <div class="mt-4 flex flex-wrap gap-2">
      <BaseBadge v-for="tech in project.technologies" :key="tech.id" :label="tech.label" :icon-id="tech.id" />
    </div>

    <div class="mt-2 flex items-center gap-4 border-t border-border-light pt-3 dark:border-border-dark">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link-muted"
        :aria-label="`View ${project.title} on GitHub`"
      >
        <Icon name="github" class="size-4" aria-hidden="true" />
        <span>Code</span>
      </a>

      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link-muted"
        :aria-label="`View ${project.title} live demo`"
      >
        <Icon name="ext" class="size-4" aria-hidden="true" />
        <span>Demo</span>
      </a>

      <NuxtLink :to="`/projects/${project.slug}`" class="link-muted ml-auto">
        <span>Details</span>
        <Icon name="arrow" class="size-4" aria-hidden="true" />
      </NuxtLink>
    </div>
  </BaseBubble>
</template>
