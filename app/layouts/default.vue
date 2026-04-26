<template>
  <div class="flex h-screen w-screen flex-col overflow-y-auto bg-background-light font-mono text-primary dark:bg-background-dark">
    <div class="background-pattern" aria-hidden="true" />
    <CompoundAppNavbar />

    <main class="grow pt-30 pb-8">
      <slot />
    </main>

    <CompoundAppFooter />
  </div>
</template>
