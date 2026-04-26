import type { ResolvedTheme, Theme } from '@/types/site'

export function useTheme() {
  const colorMode = useColorMode()

  const theme = computed<Theme>({
    get: () => colorMode.preference as Theme,
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
