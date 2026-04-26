<script setup lang="ts">
const { data: posts } = await usePostsContent()

useSeoMeta({
  title: 'Blog | Juan Rangel',
  description: 'Articles about software engineering, architecture, and practical frontend development.',
  ogTitle: 'Blog | Juan Rangel',
  ogDescription: 'Articles about software engineering, architecture, and practical frontend development.',
})
</script>

<template>
  <BaseContainer>
    <section>
      <BasePageHeading title="Blog Posts" subtitle="Write-ups about engineering, architecture, and things I learn while building." />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CompoundPostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </BaseContainer>
</template>
