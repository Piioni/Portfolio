<script setup lang="ts">
import { EXPERIENCES } from '@/data/site'
</script>

<template>
  <section class="py-12" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-title">
      Experience
    </h2>

    <div class="relative">
      <CompoundExperienceCard v-for="experience in EXPERIENCES" :key="experience.id" :experience="experience" />
    </div>
  </section>
</template>
