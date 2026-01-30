import { Link, useLocation } from 'react-router';
import { NAV_LINKS } from '@/data';
import { Container } from '@/components/ui';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

/**
 * Navbar component with horizontal navigation
 * Fixed at top with blur effect backdrop
 */
export function Navbar() {
    const location = useLocation();

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50',
                'bg-background-light/80 dark:bg-background-dark/80',
                'backdrop-blur-md',
                'border-b border-border-light dark:border-border-dark'
            )}
        >
            <Container>
                <nav className="flex items-center justify-between h-16">
                    {/* Logo - Empty spacer for layout balance */}
                    <div className="w-10" />

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = location.pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className={cn(
                                            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                                            isActive
                                                ? 'text-accent-lavender bg-accent-lavender/10'
                                                : 'text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </nav>
            </Container>
        </header>
    );
}
