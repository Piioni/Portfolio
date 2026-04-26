<script setup lang="ts">
interface Props {
  fluid?: boolean
}

withDefaults(defineProps<Props>(), {
  fluid: false,
})
</script>

<template>
  <div
    class="mx-auto w-full px-4" :class="[
      !fluid && 'max-w-[95%] md:max-w-10/12 lg:max-w-4xl xl:max-w-5xl',
    ]"
  >
    <slot />
  </div>
</template>
