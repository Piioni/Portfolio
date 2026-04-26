import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface UseThemeReturn {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const STORAGE_KEY = 'theme';

/**
 * Resolves the actual theme based on user preference or system setting
 */
function getResolvedTheme(theme: Theme): ResolvedTheme {
    if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
}

/**
 * Gets the initial theme from localStorage or defaults to 'system'
 */
function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'system';

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
    }
    return 'system';
}

/**
 * Applies the theme class to the document root element
 */
function applyTheme(resolvedTheme: ResolvedTheme): void {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
}

/**
 * Custom hook for managing dark/light theme with system preference support
 * Persists user preference to localStorage and syncs with system changes
 */
export function useTheme(): UseThemeReturn {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);
    const resolvedTheme = getResolvedTheme(theme);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(getResolvedTheme(newTheme));
    }, []);

    const toggleTheme = useCallback(() => {
        const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    }, [resolvedTheme, setTheme]);

    // Apply theme on mount and listen for system preference changes
    useEffect(() => {
        applyTheme(resolvedTheme);

        // Listen for system theme changes when using 'system' preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            if (theme === 'system') {
                applyTheme(getResolvedTheme('system'));
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, resolvedTheme]);

    return { theme, resolvedTheme, setTheme, toggleTheme };
}
