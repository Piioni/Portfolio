<script setup lang="ts">
import { getIconMeta } from '@/utils/icons'

interface Props {
  label: string
}

const props = defineProps<Props>()
const icon = computed(() => getIconMeta(props.label))
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary border-themed transition-all duration-300 ease-[var(--ease-smooth)] hover:scale-105 hover:border-accent-lavender-light dark:hover:border-accent-lavender-dark"
  >
    <Icon :name="icon.name" class="size-4 shrink-0" :style="{ color: icon.color }" />
    <span>{{ label }}</span>
  </span>
</template>
