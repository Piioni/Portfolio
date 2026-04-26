<script setup lang="ts">
const { data: projects } = await useFeaturedProjectsContent(3)
</script>

<template>
  <section class="py-12" aria-labelledby="projects-heading">
    <div class="mb-6 flex items-center justify-between">
      <h2 id="projects-heading" class="section-title mb-0!">
        Featured Projects
      </h2>

      <NuxtLink to="/projects">
        <BaseButton variant="ghost" size="sm">
          More projects
          <Icon name="mdi:arrow-right" class="ml-2 size-4" />
        </BaseButton>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CompoundProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
