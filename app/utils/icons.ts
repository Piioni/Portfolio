import type { IconDefinition, IconId } from '../../shared/icon-registry'
import {
  ICON_IDS,
  ICON_REGISTRY,

  SOCIAL_ICON_BY_PLATFORM,
} from '../../shared/icon-registry'

const ICON_FALLBACK: IconDefinition = {
  icon: 'fallback-circle',
  toneClass: 'icon-tone-muted',
}

const ICON_ID_SET = new Set<string>(ICON_IDS)

export interface IconMeta {
  name: string
  toneClass: string
}

function isIconId(value: string): value is IconId {
  return ICON_ID_SET.has(value)
}

export function resolveIconMetaById(id?: string | null): IconMeta | null {
  if (!id) {
    return null
  }

  const icon = isIconId(id) ? ICON_REGISTRY[id] : ICON_FALLBACK

  return {
    name: isIconId(id) ? id : icon.icon,
    toneClass: icon.toneClass,
  }
}

export function getSocialIcon(platform: keyof typeof SOCIAL_ICON_BY_PLATFORM): string {
  return SOCIAL_ICON_BY_PLATFORM[platform]
}
