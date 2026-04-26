<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <header class="mb-8">
    <h1 class="mb-2 text-3xl font-bold text-text-primary-light dark:text-accent-lavender-dark">
      {{ title }}
    </h1>

    <p v-if="subtitle" class="text-muted text-sm">
      {{ subtitle }}
    </p>
  </header>
</template>
