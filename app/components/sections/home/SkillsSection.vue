<script setup lang="ts">
import { SKILL_GROUPS } from '@/data/site'

const topRow = computed(() => SKILL_GROUPS.filter(group => group.category === 'frontend' || group.category === 'backend'))
const bottomRow = computed(() => SKILL_GROUPS.filter(group => ['database', 'devtools', 'os'].includes(group.category)))
</script>

<template>
  <section class="py-12" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="section-title">
      Skills
    </h2>

    <div class="mb-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <CompoundSkillBubble v-for="group in topRow" :key="group.category" :group="group" />
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <CompoundSkillBubble v-for="group in bottomRow" :key="group.category" :group="group" />
    </div>
  </section>
</template>
