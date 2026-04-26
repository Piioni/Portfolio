import type { SocialPlatform } from '@/types/site'

export type IconId
  = | 'html'
    | 'css'
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'tailwindcss'
    | 'vite'
    | 'nestjs'
    | 'laravel'
    | 'php'
    | 'python'
    | 'java'
    | 'bunjs'
    | 'mongodb'
    | 'mysql'
    | 'postgresql'
    | 'git'
    | 'github'
    | 'docker'
    | 'vim'
    | 'archlinux'
    | 'linux'
    | 'windows'
    | 'mac'
    | 'nuxt'
    | 'nuxt-content'
    | 'vue'
    | 'architecture'
    | 'clean-architecture'
    | 'components'
    | 'frontend'
    | 'open-source'
    | 'reading'
    | 'movies'
    | 'music'
    | 'coffee'
    | 'gaming'

export interface IconMeta {
  name: string
  toneClass: string
}

interface IconLookupOptions {
  id?: string | null
  label?: string
  source?: string
  warnOnMissing?: boolean
}

const ICON_FALLBACK: IconMeta = {
  name: 'fallback-circle',
  toneClass: 'icon-tone-muted',
}

const ICON_MAP: Record<IconId, IconMeta> = {
  'html': { name: 'brand-html', toneClass: 'icon-tone-html' },
  'css': { name: 'brand-css', toneClass: 'icon-tone-css' },
  'javascript': { name: 'brand-javascript', toneClass: 'icon-tone-javascript' },
  'typescript': { name: 'brand-typescript', toneClass: 'icon-tone-typescript' },
  'react': { name: 'brand-react', toneClass: 'icon-tone-react' },
  'tailwindcss': { name: 'brand-tailwindcss', toneClass: 'icon-tone-tailwindcss' },
  'vite': { name: 'brand-vite', toneClass: 'icon-tone-vite' },
  'nestjs': { name: 'brand-nestjs', toneClass: 'icon-tone-nestjs' },
  'laravel': { name: 'brand-laravel', toneClass: 'icon-tone-laravel' },
  'php': { name: 'brand-php', toneClass: 'icon-tone-php' },
  'python': { name: 'brand-python', toneClass: 'icon-tone-python' },
  'java': { name: 'brand-java', toneClass: 'icon-tone-java' },
  'bunjs': { name: 'brand-bun', toneClass: 'icon-tone-bun' },
  'mongodb': { name: 'brand-mongodb', toneClass: 'icon-tone-mongodb' },
  'mysql': { name: 'brand-mysql', toneClass: 'icon-tone-mysql' },
  'postgresql': { name: 'brand-postgresql', toneClass: 'icon-tone-postgresql' },
  'git': { name: 'brand-git', toneClass: 'icon-tone-git' },
  'github': { name: 'github', toneClass: 'icon-tone-github' },
  'docker': { name: 'brand-docker', toneClass: 'icon-tone-docker' },
  'vim': { name: 'brand-vim', toneClass: 'icon-tone-vim' },
  'archlinux': { name: 'brand-archlinux', toneClass: 'icon-tone-archlinux' },
  'linux': { name: 'brand-linux', toneClass: 'icon-tone-linux' },
  'windows': { name: 'brand-windows', toneClass: 'icon-tone-windows' },
  'mac': { name: 'brand-apple', toneClass: 'icon-tone-mac' },
  'nuxt': { name: 'brand-nuxt', toneClass: 'icon-tone-nuxt' },
  'nuxt-content': { name: 'brand-nuxt-content', toneClass: 'icon-tone-nuxt-content' },
  'vue': { name: 'brand-vue', toneClass: 'icon-tone-vue' },
  'architecture': { name: 'concept-architecture', toneClass: 'icon-tone-concept' },
  'clean-architecture': { name: 'concept-clean-architecture', toneClass: 'icon-tone-concept' },
  'components': { name: 'concept-components', toneClass: 'icon-tone-concept' },
  'frontend': { name: 'concept-frontend', toneClass: 'icon-tone-concept' },
  'open-source': { name: 'interest-open-source', toneClass: 'icon-tone-open-source' },
  'reading': { name: 'interest-reading', toneClass: 'icon-tone-reading' },
  'movies': { name: 'interest-movies', toneClass: 'icon-tone-movies' },
  'music': { name: 'interest-music', toneClass: 'icon-tone-music' },
  'coffee': { name: 'interest-coffee', toneClass: 'icon-tone-coffee' },
  'gaming': { name: 'interest-gaming', toneClass: 'icon-tone-gaming' },
}

const LABEL_TO_ICON_ID: Record<string, IconId> = {
  'html': 'html',
  'css': 'css',
  'javascript': 'javascript',
  'typescript': 'typescript',
  'react': 'react',
  'tailwindcss': 'tailwindcss',
  'vite': 'vite',
  'nestjs': 'nestjs',
  'laravel': 'laravel',
  'php': 'php',
  'python': 'python',
  'java': 'java',
  'bun': 'bunjs',
  'mongodb': 'mongodb',
  'mysql': 'mysql',
  'postgresql': 'postgresql',
  'git': 'git',
  'github': 'github',
  'docker': 'docker',
  'vim motions': 'vim',
  'arch': 'archlinux',
  'linux': 'linux',
  'windows': 'windows',
  'mac': 'mac',
  'nuxt': 'nuxt',
  'nuxt content': 'nuxt-content',
  'vue': 'vue',
  'architecture': 'architecture',
  'clean architecture': 'clean-architecture',
  'components': 'components',
  'frontend': 'frontend',
  'open source': 'open-source',
  'reading': 'reading',
  'movies': 'movies',
  'music': 'music',
  'coffee': 'coffee',
  'gaming': 'gaming',
}

const SOCIAL_ICON_MAP: Record<SocialPlatform, string> = {
  github: 'github',
  linkedin: 'linkedin',
  twitter: 'x',
  email: 'email',
}

const warnedMissingIcons = new Set<string>()

function warnMissingIcon(key: string, source: string | undefined) {
  if (warnedMissingIcons.has(key)) {
    return
  }

  warnedMissingIcons.add(key)

  console.warn(`[icons] Missing icon mapping${source ? ` for ${source}` : ''}: "${key}"`)
}

function normalizeKey(value: string): string {
  return value.trim().toLowerCase()
}

export function resolveIconMeta(options: IconLookupOptions): IconMeta {
  const { id, label, source, warnOnMissing = import.meta.dev } = options

  if (id) {
    const iconById = ICON_MAP[id as IconId]

    if (iconById) {
      return iconById
    }

    if (warnOnMissing) {
      warnMissingIcon(`id:${id}`, source)
    }
  }

  if (label) {
    const normalizedLabel = normalizeKey(label)
    const iconId = LABEL_TO_ICON_ID[normalizedLabel]

    if (iconId) {
      return ICON_MAP[iconId]
    }

    if (warnOnMissing) {
      warnMissingIcon(`label:${label}`, source)
    }
  }

  return ICON_FALLBACK
}

export function getSocialIcon(platform: SocialPlatform): string {
  return SOCIAL_ICON_MAP[platform]
}
