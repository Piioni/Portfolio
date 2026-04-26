<script setup lang="ts">
import { resolveIconMeta } from '@/utils/icons'

interface Props {
  label: string
  iconId?: string
}

const props = defineProps<Props>()
const icon = computed(() => resolveIconMeta({
  id: props.iconId,
  label: props.label,
  source: 'BaseBadge',
}))
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary border-themed transition-all duration-300 ease-(--ease-smooth) hover:scale-105 hover:border-accent-lavender-light dark:hover:border-accent-lavender-dark"
  >
    <Icon :name="icon.name" class="size-4 shrink-0" :class="icon.toneClass" aria-hidden="true" />
    <span>{{ label }}</span>
  </span>
</template>
