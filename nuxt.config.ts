import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  components: [
    {
      path: './app/components',
      pathPrefix: true,
    },
  ],

  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
