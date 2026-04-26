<script setup lang="ts">
const { data: projects } = await useFeaturedProjectsContent(3)
</script>

<template>
  <section class="py-12" aria-labelledby="projects-heading">
    <div class="mb-6 flex items-center justify-between">
      <h2 id="projects-heading" class="section-title mb-0!">
        Featured Projects
      </h2>

      <NuxtLink to="/projects" class="link-muted rounded-lg px-2 py-1 text-sm font-medium">
        <span>More projects</span>
        <Icon name="arrow" class="size-4" aria-hidden="true" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CompoundProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
