<script setup lang="ts">
useSeoMeta({
  title: 'Juan Rangel | Full Stack Developer',
  description: 'Personal portfolio built with Nuxt, featuring projects, writing, and engineering experience.',
  ogTitle: 'Juan Rangel | Full Stack Developer',
  ogDescription: 'Personal portfolio built with Nuxt, featuring projects, writing, and engineering experience.',
  ogType: 'website',
})
</script>

<template>
  <BaseContainer>
    <SectionsHomeHeroSection />
    <SectionsHomeSkillsSection />
    <SectionsHomeExperienceSection />
    <SectionsHomeProjectsPreviewSection />
    <SectionsHomeInterestsSection />
  </BaseContainer>
</template>
