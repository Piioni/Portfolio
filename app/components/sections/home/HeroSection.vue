<template>
  <section aria-labelledby="hero-heading">
    <h2 class="section-title">
      Me, Myself and I
    </h2>

    <BaseBubble variant="hero">
      <div class="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left">
        <BaseAvatar src="/rei.webp" alt="Piioni's profile picture" size="xl" class="shrink-0" />

        <div class="space-y-3">
          <h1 id="hero-heading" class="text-primary text-2xl font-bold md:text-3xl">
            Hi! I am
            <span class="text-accent-lavender-light dark:text-accent-lavender-dark"> Juan ツ</span>
          </h1>

          <p class="text-muted max-w-2xl leading-relaxed">
            I am a full stack developer, I love coding and creating new things.
          </p>

          <p class="text-muted text-sm">
            My main tech stack is
            <span class="font-medium text-accent-lavender-light dark:text-accent-lavender-dark">React</span>,
            <span class="font-medium text-accent-lavender-light dark:text-accent-lavender-dark">TypeScript</span>
            and
            <span class="font-medium text-accent-lavender-light dark:text-accent-lavender-dark">Tailwind</span>.
          </p>

          <p class="text-muted text-sm">
            I enjoy Docker and DevOps practices, always looking for ways to improve deployment workflows and CI/CD
            pipelines.
          </p>

          <p class="text-muted text-sm">
            I like music and digital art as well, check out my playlists at
            <a
              href="https://tidal.com/@piioni"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-accent-lavender-light hover:underline dark:text-accent-lavender-dark"
            >
              Tidal profile
            </a>.
          </p>

          <p class="text-muted text-sm">
            You can find my resume here:
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-accent-lavender-light hover:underline dark:text-accent-lavender-dark"
            >
              Resume PDF
            </a>
          </p>
        </div>
      </div>
    </BaseBubble>
  </section>
</template>
