<script setup lang="ts">
const { data: experiences } = await useExperiencesContent()
</script>

<template>
  <section class="py-12" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-title">
      Experience
    </h2>

    <div class="relative">
      <CompoundExperienceCard v-for="experience in experiences" :key="experience.id" :experience="experience" />
    </div>
  </section>
</template>
