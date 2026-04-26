import type { SocialPlatform } from '@/types/site'

interface IconMeta {
  name: string
  color: string
}

const ICON_MAP: Record<string, IconMeta> = {
  'html': { name: 'simple-icons:html5', color: '#E34F26' },
  'css': { name: 'simple-icons:css3', color: '#1572B6' },
  'javascript': { name: 'simple-icons:javascript', color: '#F7DF1E' },
  'typescript': { name: 'simple-icons:typescript', color: '#3178C6' },
  'react': { name: 'simple-icons:react', color: '#61DAFB' },
  'tailwindcss': { name: 'simple-icons:tailwindcss', color: '#06B6D4' },
  'vite': { name: 'simple-icons:vite', color: '#646CFF' },
  'nestjs': { name: 'simple-icons:nestjs', color: '#E0234E' },
  'laravel': { name: 'simple-icons:laravel', color: '#FF2D20' },
  'php': { name: 'simple-icons:php', color: '#777BB4' },
  'python': { name: 'simple-icons:python', color: '#3776AB' },
  'java': { name: 'simple-icons:openjdk', color: '#ED8B00' },
  'bun': { name: 'simple-icons:bun', color: '#fbf0df' },
  'mongodb': { name: 'simple-icons:mongodb', color: '#47A248' },
  'mysql': { name: 'simple-icons:mysql', color: '#4479A1' },
  'postgresql': { name: 'simple-icons:postgresql', color: '#4169E1' },
  'git': { name: 'simple-icons:git', color: '#F05032' },
  'github': { name: 'simple-icons:github', color: '#999999' },
  'docker': { name: 'simple-icons:docker', color: '#2496ED' },
  'vim motions': { name: 'simple-icons:vim', color: '#019733' },
  'apache': { name: 'simple-icons:apache', color: '#D22128' },
  'arch': { name: 'simple-icons:archlinux', color: '#1793D1' },
  'linux': { name: 'simple-icons:linux', color: '#FCC624' },
  'mac': { name: 'simple-icons:apple', color: '#999999' },
  'windows': { name: 'simple-icons:windows', color: '#0078D6' },
  'open source': { name: 'mdi:code-tags', color: '#61DAFB' },
  'reading': { name: 'mdi:book-open-page-variant', color: '#8B4513' },
  'movies': { name: 'mdi:movie-open', color: '#FFD700' },
  'music': { name: 'mdi:music-note', color: '#9B59B6' },
  'coffee': { name: 'mdi:coffee', color: '#6F4E37' },
  'gaming': { name: 'mdi:controller', color: '#E74C3C' },
}

const SOCIAL_ICON_MAP: Record<SocialPlatform, string> = {
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
  twitter: 'simple-icons:x',
  email: 'mdi:email-outline',
}

export function getIconMeta(label: string): IconMeta {
  const key = label.toLowerCase()
  return ICON_MAP[key] ?? { name: 'mdi:circle-outline', color: '#888888' }
}

export function getSocialIcon(platform: SocialPlatform): string {
  return SOCIAL_ICON_MAP[platform]
}
