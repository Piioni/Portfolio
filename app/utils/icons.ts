import type { IconDefinition, IconId } from '../../shared/icon-registry'
import {
  ICON_REGISTRY,

  SOCIAL_ICON_BY_PLATFORM,
} from '../../shared/icon-registry'

const ICON_FALLBACK: IconDefinition = {
  icon: 'fallback-circle',
  toneClass: 'icon-tone-muted',
}

export interface IconMeta {
  name: string
  toneClass: string
}

export function resolveIconMetaById(id?: string | null): IconMeta | null {
  if (!id) {
    return null
  }

  const icon = ICON_REGISTRY[id as IconId] ?? ICON_FALLBACK

  return {
    name: id in ICON_REGISTRY ? id : icon.icon,
    toneClass: icon.toneClass,
  }
}

export function getSocialIcon(platform: keyof typeof SOCIAL_ICON_BY_PLATFORM): string {
  return SOCIAL_ICON_BY_PLATFORM[platform]
}
