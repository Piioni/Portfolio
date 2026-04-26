import process from 'node:process'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/Portfolio/',
  },

  css: ['./app/assets/css/main.css'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'theme',
  },

  icon: {
    provider: 'server',
    fallbackToApi: false,
    serverBundle: {
      collections: ['mdi', 'simple-icons'],
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
