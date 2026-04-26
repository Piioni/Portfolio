<script setup lang="ts">
const { data: projects } = await useProjectsContent()

useSeoMeta({
  title: 'Projects | Juan Rangel',
  description: 'Selected software projects, experiments and production-ready applications.',
  ogTitle: 'Projects | Juan Rangel',
  ogDescription: 'Selected software projects, experiments and production-ready applications.',
})
</script>

<template>
  <BaseContainer>
    <section>
      <BasePageHeading title="Projects" subtitle="A curated list of work, experiments and production-ready apps." />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CompoundProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </BaseContainer>
</template>
