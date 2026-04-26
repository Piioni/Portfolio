<script setup lang="ts">
const { data: socialLinks } = await useSocialLinksContent()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto border-t border-border-light py-8 dark:border-border-dark">
    <BaseContainer>
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-2">
          <BaseSocialIcon
            v-for="social in socialLinks"
            :key="social.id"
            :platform="social.platform"
            :href="social.url"
            :label="social.label"
          />
        </div>

        <p class="text-sm text-text-muted-light dark:text-text-muted-dark">
          Juan Rangel © {{ year }}. All rights reserved.
        </p>
      </div>
    </BaseContainer>
  </footer>
</template>
