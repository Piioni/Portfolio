<script setup lang="ts">
const { resolvedTheme, toggleTheme } = useTheme()
</script>

<template>
  <BaseButton
    :aria-label="`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`"
    @click="toggleTheme"
  >
    <Icon :name="resolvedTheme === 'dark' ? 'sun' : 'moon'" class="size-5" aria-hidden="true" />
  </BaseButton>
</template>
