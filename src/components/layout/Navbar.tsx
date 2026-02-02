import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '@/data';
import { Container, Bubble } from '@/components/ui';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/types';

/**
 * Mobile navigation menu component with animated bubbles
 * Separated for Single Responsibility Principle
 */
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    currentPath: string;
}

function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay with backdrop blur */}
            <div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Mobile menu content */}
            <div className="fixed top-16 left-0 right-0 z-50 md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark shadow-lg">
                <nav className="px-4 py-4 flex flex-col gap-3">
                    {NAV_LINKS.map((link: NavLink, index: number) => {
                        const isActive = currentPath === link.href;
                        const animationDelay = `${index * 80}ms`;

                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={onClose}
                                className="animate-fade-scale-in block"
                                style={{ animationDelay }}
                            >
                                <Bubble
                                    hoverable={!isActive}
                                    className={cn(
                                        'transition-all duration-300 cursor-pointer',
                                        isActive
                                            ? 'border-accent-lavender-light dark:border-accent-lavender-dark bg-accent-lavender-light/15 dark:bg-accent-lavender-dark/15'
                                            : 'hover:bg-surface-light dark:hover:bg-surface-dark hover:border-accent-lavender-light/50 dark:hover:border-accent-lavender-dark/50'
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'block text-base font-medium transition-colors',
                                            isActive
                                                ? 'text-accent-lavender-light dark:text-accent-lavender-dark'
                                                : 'text-text-primary-light dark:text-text-primary-dark'
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                </Bubble>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}

/**
 * Navbar component with horizontal navigation on desktop and mobile hamburger menu
 * Fixed at top with blur effect backdrop
 */
export function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-60',
                    'backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80',
                    'border-b border-border-light dark:border-border-dark'
                )}
            >
                <Container>
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo / Home Link */}
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="text-xl font-bold text-accent-lavender-light dark:text-accent-lavender-dark hover:text-accent-lavender-light/80 dark:hover:text-accent-lavender-dark/80 transition-colors"
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
                                                    ? 'text-accent-lavender-light dark:text-accent-lavender-dark bg-accent-lavender-light/10 dark:bg-accent-lavender-dark/10'
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
                                aria-expanded={isMenuOpen}
                                className={cn(
                                    'inline-flex items-center justify-center',
                                    'w-10 h-10 rounded-lg',
                                    'text-text-muted-light dark:text-text-muted-dark',
                                    'hover:text-accent-lavender-light dark:hover:text-accent-lavender-dark hover:bg-accent-lavender-light/10 dark:hover:bg-accent-lavender-dark/10',
                                    'transition-all duration-300 ease-smooth',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender-light dark:focus-visible:ring-accent-lavender-dark'
                                )}
                            >
                                <div
                                    className={cn(
                                        'transition-transform duration-300 ease-smooth',
                                        isMenuOpen && 'rotate-90'
                                    )}
                                >
                                    {isMenuOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
                                </div>
                            </button>
                        </div>
                    </nav>
                </Container>
            </header>

            {/* Mobile Menu - Rendered outside Container for full-width */}
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} currentPath={location.pathname} />
        </>
    );
}
