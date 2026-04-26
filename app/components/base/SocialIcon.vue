<script setup lang="ts">
import type { SocialPlatform } from '@/types/site'
import { getSocialIcon } from '@/utils/icons'

interface Props {
  platform: SocialPlatform
  href: string
  label: string
}

const props = defineProps<Props>()
const iconName = computed(() => getSocialIcon(props.platform))
</script>

<template>
  <a
    :href="props.href"
    :target="props.platform !== 'email' ? '_blank' : undefined"
    :rel="props.platform !== 'email' ? 'noopener noreferrer' : undefined"
    :aria-label="props.label"
    class="focus-ring inline-flex size-10 items-center justify-center rounded-lg text-text-muted-light transition-all duration-300 ease-(--ease-smooth) hover:bg-accent-lavender-light/10 hover:text-accent-lavender-light dark:text-text-muted-dark dark:hover:bg-accent-lavender-dark/10 dark:hover:text-accent-lavender-dark"
  >
    <Icon :name="iconName" class="size-5" />
  </a>
</template>
