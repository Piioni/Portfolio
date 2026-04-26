<script setup lang="ts">
const route = useRoute()

const slug = computed(() => String(route.params.slug))
const { data: project } = await useProjectBySlugContent(slug)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeoMeta({
  title: () => `${project.value?.title ?? 'Project'} | Juan Rangel`,
  description: () => project.value?.description ?? 'Project details',
  ogTitle: () => `${project.value?.title ?? 'Project'} | Juan Rangel`,
  ogDescription: () => project.value?.description ?? 'Project details',
  ogType: 'article',
})
</script>

<template>
  <BaseContainer>
    <article class="space-y-6">
      <header>
        <p class="mb-2 text-xs tracking-wider text-accent-lavender-light uppercase dark:text-accent-lavender-dark">
          Project
        </p>

        <h1 class="text-3xl font-bold text-text-primary-light dark:text-accent-lavender-dark">
          {{ project?.title }}
        </h1>

        <p class="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
          {{ project?.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <BaseBadge v-for="tech in project?.technologies" :key="tech" :label="tech" />
        </div>

        <div class="mt-6 flex items-center gap-4">
          <a
            v-if="project?.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-muted"
          >
            <Icon name="simple-icons:github" class="size-4" />
            <span>Source Code</span>
          </a>

          <a
            v-if="project?.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-muted"
          >
            <Icon name="mdi:open-in-new" class="size-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </header>

      <BaseBubble variant="hero" as="section">
        <ContentRenderer :value="project" />
      </BaseBubble>
    </article>
  </BaseContainer>
</template>
