<script setup lang="ts">
type BubbleVariant = 'default' | 'hero' | 'card'

interface Props {
  variant?: BubbleVariant
  hoverable?: boolean
  as?: 'div' | 'article' | 'section'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hoverable: false,
  as: 'div',
})

const variantStyles: Record<BubbleVariant, string> = {
  default: 'p-4 md:p-6',
  hero: 'p-6 md:p-8',
  card: 'p-5 flex flex-col h-full',
}
</script>

<template>
  <component
    :is="props.as"
    class="rounded-2xl border-themed bg-bubble-light dark:bg-bubble-dark backdrop-blur-xs" :class="[
      variantStyles[props.variant],
      props.hoverable && 'hover-glow hover:-translate-y-1 hover:scale-[1.02]',
    ]"
  >
    <slot />
  </component>
</template>
