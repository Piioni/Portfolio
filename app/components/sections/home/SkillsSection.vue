<script setup lang="ts">
const { data: skillGroups } = await useSkillGroupsContent()

const topRow = computed(() => (skillGroups.value ?? []).filter(group => group.category === 'frontend' || group.category === 'backend'))
const bottomRow = computed(() => (skillGroups.value ?? []).filter(group => group.category === 'mobile' || group.category === 'devops' || group.category === 'tooling'))
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
