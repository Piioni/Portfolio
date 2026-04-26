<script setup lang="ts">
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
] as const

const route = useRoute()
const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

watch(() => route.path, closeMenu)
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-60 border-b border-border-light bg-background-light/80 backdrop-blur-md dark:border-border-dark dark:bg-background-dark/80"
  >
    <BaseContainer>
      <nav class="flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-accent-lavender-light transition-colors hover:text-accent-lavender-light/80 dark:text-accent-lavender-dark dark:hover:text-accent-lavender-dark/80"
        >
          <span>{{ '<Dev/>' }}</span>
        </NuxtLink>

        <ul class="hidden items-center gap-1 md:flex">
          <li v-for="link in NAV_LINKS" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300" :class="[
                route.path === link.href
                  ? 'bg-accent-lavender-light/10 text-accent-lavender-light dark:bg-accent-lavender-dark/10 dark:text-accent-lavender-dark'
                  : 'text-text-muted-light hover:bg-surface-light hover:text-text-primary-light dark:text-text-muted-dark dark:hover:bg-surface-dark dark:hover:text-text-primary-dark',
              ]"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="hidden items-center gap-1 md:flex">
          <CompoundThemeToggle />
        </div>

        <div class="flex items-center gap-2 md:hidden">
          <CompoundThemeToggle />
          <button
            type="button"
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMenuOpen"
            class="focus-ring inline-flex size-10 items-center justify-center rounded-lg text-text-muted-light transition-all duration-300 ease-(--ease-smooth) hover:bg-accent-lavender-light/10 hover:text-accent-lavender-light dark:text-text-muted-dark dark:hover:bg-accent-lavender-dark/10 dark:hover:text-accent-lavender-dark"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Icon :name="isMenuOpen ? 'close' : 'menu'" class="size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </BaseContainer>
  </header>

  <Transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    />
  </Transition>

  <Transition name="slide-down">
    <div
      v-if="isMenuOpen"
      class="fixed top-16 right-0 left-0 z-50 border-b border-border-light bg-background-light/95 shadow-lg backdrop-blur-md dark:border-border-dark dark:bg-background-dark/95 md:hidden"
    >
      <nav class="flex flex-col gap-3 px-4 py-4">
        <NuxtLink
          v-for="(link, index) in NAV_LINKS"
          :key="link.href"
          :to="link.href"
          class="animate-fade-scale-in block"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <BaseBubble
            :hoverable="route.path !== link.href"
            class="cursor-pointer transition-all duration-300" :class="[
              route.path === link.href
                ? 'border-accent-lavender-light bg-accent-lavender-light/15 dark:border-accent-lavender-dark dark:bg-accent-lavender-dark/15'
                : 'hover:border-accent-lavender-light/50 hover:bg-surface-light dark:hover:border-accent-lavender-dark/50 dark:hover:bg-surface-dark',
            ]"
          >
            <span
              class="block text-base font-medium transition-colors" :class="[
                route.path === link.href
                  ? 'text-accent-lavender-light dark:text-accent-lavender-dark'
                  : 'text-text-primary-light dark:text-text-primary-dark',
              ]"
            >
              {{ link.label }}
            </span>
          </BaseBubble>
        </NuxtLink>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
