import { ICON_REGISTRY } from './shared/icon-registry'

const iconAliasesFromRegistry = Object.fromEntries(
  Object.entries(ICON_REGISTRY).map(([id, definition]) => [id, definition.icon]),
)

export default defineAppConfig({
  icon: {
    size: '1em',
    class: 'icon',
    aliases: {
      ...iconAliasesFromRegistry,
      'menu': 'mdi:menu',
      'close': 'mdi:close',
      'sun': 'mdi:white-balance-sunny',
      'moon': 'mdi:moon-waning-crescent',
      'arrow': 'mdi:arrow-right',
      'ext': 'mdi:open-in-new',
      'linkedin': 'simple-icons:linkedin',
      'x': 'simple-icons:x',
      'email': 'mdi:email-outline',
      'fallback-circle': 'mdi:circle-outline',
    },
  },
})
