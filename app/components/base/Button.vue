<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
})

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-lavender-light dark:bg-accent-lavender-dark text-white hover:bg-accent-lavender-hover-light dark:hover:bg-accent-lavender-hover-dark shadow-sm',
  secondary:
    'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:opacity-90',
  ghost:
    'bg-transparent text-text-primary-light dark:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark',
  outline:
    'border-themed bg-transparent text-text-primary-light dark:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark hover-glow',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
</script>

<template>
  <button
    type="button"
    class="focus-ring inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-[var(--ease-smooth)] disabled:cursor-not-allowed disabled:opacity-50" :class="[
      variantStyles[props.variant],
      sizeStyles[props.size],
      props.fullWidth && 'w-full',
    ]"
  >
    <slot />
  </button>
</template>
