<script setup lang="ts">
import { INTERESTS } from '@/data/site'
</script>

<template>
  <section class="py-12" aria-labelledby="interests-heading">
    <h2 id="interests-heading" class="section-title">
      Interests
    </h2>

    <div class="flex flex-wrap gap-3">
      <BaseBadge v-for="interest in INTERESTS" :key="interest.label" :label="interest.label" />
    </div>
  </section>
</template>
