import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '@/data';
import { Container } from '@/components/ui';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

/**
 * Navbar component with horizontal navigation on desktop and mobile hamburger menu
 * Fixed at top with blur effect backdrop
 */
export function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                    {/* Logo / Home Link */}
                    <Link
                        to="/"
                        className="text-xl font-bold text-accent-lavender hover:text-accent-lavender/80 transition-colors"
                    >
                        <span>{'<Dev/>'}</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center gap-1">
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

                    {/* Desktop Theme Toggle */}
                    <div className="hidden md:flex">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className={cn(
                                'inline-flex items-center justify-center',
                                'w-10 h-10 rounded-lg',
                                'text-text-muted-light dark:text-text-muted-dark',
                                'hover:text-accent-lavender hover:bg-accent-lavender/10',
                                'transition-all duration-300 ease-smooth',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender'
                            )}
                        >
                            {isMenuOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                        <ul className="flex flex-col">
                            {NAV_LINKS.map((link) => {
                                const isActive = location.pathname === link.href;

                                return (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={cn(
                                                'block px-4 py-3 text-sm font-medium transition-all duration-300 border-l-4',
                                                isActive
                                                    ? 'text-accent-lavender bg-accent-lavender/10 border-accent-lavender'
                                                    : 'text-text-muted-light dark:text-text-muted-dark border-transparent hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}
