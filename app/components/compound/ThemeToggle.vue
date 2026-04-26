<script setup lang="ts">
const { resolvedTheme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    :aria-label="`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`"
    class="focus-ring inline-flex size-10 items-center justify-center rounded-lg text-text-muted-light transition-all duration-300 ease-(--ease-smooth) hover:bg-accent-lavender-light/10 hover:text-accent-lavender-light dark:text-text-muted-dark dark:hover:bg-accent-lavender-dark/10 dark:hover:text-accent-lavender-dark"
    @click="toggleTheme"
  >
    <Icon :name="resolvedTheme === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'" class="size-5" />
  </button>
</template>
