import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/hooks';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
    className?: string;
}

/**
 * ThemeToggle component for switching between dark and light modes
 * Uses icon to indicate current theme state
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
    const { resolvedTheme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            className={cn(
                'inline-flex items-center justify-center',
                'w-10 h-10 rounded-lg',
                'text-text-muted-light dark:text-text-muted-dark',
                'hover:text-accent-lavender hover:bg-accent-lavender/10',
                'transition-all duration-300 ease-smooth',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender',
                className
            )}
        >
            {resolvedTheme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
    );
}
