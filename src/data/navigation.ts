import type { NavLink } from '@/types';

export const NAV_LINKS: readonly NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
] as const;
