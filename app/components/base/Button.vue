<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
})
</script>

<template>
  <button
    :type="props.type"
    class="focus-ring inline-flex size-10 items-center justify-center rounded-lg text-text-muted-light transition-all duration-300 ease-(--ease-smooth) hover:bg-accent-lavender-light/10 hover:text-accent-lavender-light dark:text-text-muted-dark dark:hover:bg-accent-lavender-dark/10 dark:hover:text-accent-lavender-dark"
  >
    <slot />
  </button>
</template>
