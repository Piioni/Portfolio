<script setup lang="ts">
import type { SkillGroupItem } from '@/types/site'

interface Props {
  group: SkillGroupItem
}

defineProps<Props>()
</script>

<template>
  <BaseBubble>
    <h3
      class="mb-3 text-xs font-semibold tracking-wider text-accent-lavender-light uppercase dark:text-accent-lavender-dark"
    >
      {{ group.label }}
    </h3>

    <div class="flex flex-wrap gap-2">
      <BaseBadge v-for="skill in group.skills" :key="skill.id" :label="skill.name" />
    </div>
  </BaseBubble>
</template>
