<script setup lang="ts">
type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  src: string
  alt: string
  size?: AvatarSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'size-8',
  md: 'size-12',
  lg: 'size-20',
  xl: 'size-32',
}
</script>

<template>
  <div
    class="relative overflow-hidden rounded-full border-2 border-accent-lavender-light/30 transition-all duration-300 ease-(--ease-smooth) hover:scale-110 hover:rotate-3 hover:border-accent-lavender-light hover:shadow-[0_0_20px_oklch(0.6_0.18_290/0.4)] dark:border-accent-lavender-dark/30 dark:hover:border-accent-lavender-dark dark:hover:shadow-[0_0_20px_oklch(0.72_0.12_290/0.3)]" :class="[
      sizeStyles[props.size],
    ]"
  >
    <img :src="props.src" :alt="props.alt" class="size-full object-cover">
  </div>
</template>
