import type { ResolvedTheme, Theme } from '@/types/site'

const STORAGE_KEY = 'theme'

function getResolvedTheme(theme: Theme): ResolvedTheme {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return theme
}

function getInitialTheme(): Theme {
  if (import.meta.server) {
    return 'system'
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }

  return 'system'
}

function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

export function useTheme() {
  const theme = useState<Theme>('theme', getInitialTheme)

  const resolvedTheme = computed<ResolvedTheme>(() => {
    if (import.meta.server) {
      return 'light'
    }

    return getResolvedTheme(theme.value)
  })

  function setTheme(nextTheme: Theme) {
    theme.value = nextTheme

    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, nextTheme)
      applyTheme(getResolvedTheme(nextTheme))
    }
  }

  function toggleTheme() {
    const nextTheme: Theme = resolvedTheme.value === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  if (import.meta.client) {
    watchEffect(() => {
      applyTheme(resolvedTheme.value)
    })

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme.value === 'system') {
        applyTheme(getResolvedTheme('system'))
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    onScopeDispose(() => mediaQuery.removeEventListener('change', handleChange))
  }

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  }
}
