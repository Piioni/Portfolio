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

const sizePixels: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 80,
  xl: 128,
}

const sizes: Record<AvatarSize, string> = {
  sm: '32px',
  md: '48px',
  lg: '80px',
  xl: '128px',
}
</script>

<template>
  <div
    class="relative overflow-hidden rounded-full border-2 border-accent-lavender-light/30 transition-all duration-300 ease-(--ease-smooth) hover:scale-110 hover:rotate-3 hover:border-accent-lavender-light hover:shadow-[0_0_20px_oklch(0.6_0.18_290/0.4)] dark:border-accent-lavender-dark/30 dark:hover:border-accent-lavender-dark dark:hover:shadow-[0_0_20px_oklch(0.72_0.12_290/0.3)]" :class="[
      sizeStyles[props.size],
    ]"
  >
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      :width="sizePixels[props.size]"
      :height="sizePixels[props.size]"
      :sizes="sizes[props.size]"
      format="webp"
      loading="lazy"
      class="size-full object-cover"
    />
  </div>
</template>
