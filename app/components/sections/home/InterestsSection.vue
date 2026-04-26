<script setup lang="ts">
const { data: interests } = await useInterestsContent()
</script>

<template>
  <section class="py-12" aria-labelledby="interests-heading">
    <h2 id="interests-heading" class="section-title">
      Interests
    </h2>

    <div class="flex flex-wrap gap-3">
      <BaseBadge v-for="interest in interests" :key="interest.id" :label="interest.label" :icon-id="interest.id" />
    </div>
  </section>
</template>
