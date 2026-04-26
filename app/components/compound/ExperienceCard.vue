<script setup lang="ts">
import type { ExperienceItem } from '@/types/site'
import { formatDateRange } from '@/utils/format'

interface Props {
  experience: ExperienceItem
}

const props = defineProps<Props>()

const dateRange = computed(() => formatDateRange(props.experience.startDate, props.experience.endDate))
</script>

<template>
  <article
    class="relative pb-8 pl-6 last:pb-0 before:absolute before:top-3 before:bottom-0 before:left-0 before:w-[3px] before:bg-text-primary-light/27 dark:before:bg-accent-lavender-dark/25"
  >
    <div
      class="absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full bg-accent-lavender-light shadow-[0_0_20px_oklch(0.6_0.18_290/0.4)] dark:bg-accent-lavender-dark dark:shadow-[0_0_20px_oklch(0.72_0.12_290/0.3)]"
    />

    <div class="ml-4">
      <span
        class="text-xs font-medium tracking-wider text-accent-lavender-light uppercase dark:text-accent-lavender-dark"
      >
        {{ dateRange }}
      </span>

      <h3 class="text-primary mt-1 text-lg font-semibold">
        {{ experience.role }}
      </h3>
      <p class="text-muted text-sm">
        {{ experience.company }}
      </p>

      <p class="text-muted mt-3 text-sm leading-relaxed">
        {{ experience.description }}
      </p>

      <ul v-if="experience.highlights?.length" class="mt-4 list-inside list-disc space-y-0.5 pl-2">
        <li v-for="(highlight, index) in experience.highlights" :key="index" class="text-muted text-sm leading-relaxed">
          {{ highlight }}
        </li>
      </ul>

      <div class="mt-3 flex flex-wrap gap-2">
        <BaseBadge v-for="tech in experience.technologies" :key="tech.id" :label="tech.label" :icon-id="tech.id" />
      </div>
    </div>
  </article>
</template>
