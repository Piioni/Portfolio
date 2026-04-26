<script setup lang="ts">
const { data: posts } = await usePostsContent()
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
