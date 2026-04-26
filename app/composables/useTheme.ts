import type { ResolvedTheme, Theme } from '@/types/site'

function isTheme(value: string): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

export function useTheme() {
  const colorMode = useColorMode()

  const theme = computed<Theme>({
    get: () => isTheme(colorMode.preference) ? colorMode.preference : 'system',
    set: (nextTheme) => {
      colorMode.preference = nextTheme
    },
  })

  const resolvedTheme = computed<ResolvedTheme>(() => {
    return colorMode.value === 'dark' ? 'dark' : 'light'
  })

  function setTheme(nextTheme: Theme) {
    theme.value = nextTheme
  }

  function toggleTheme() {
    const nextTheme: Theme = resolvedTheme.value === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  }
}
