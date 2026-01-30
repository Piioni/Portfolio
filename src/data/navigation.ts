import type { NavLink } from '@/types';

export const NAV_LINKS: readonly NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
] as const;
