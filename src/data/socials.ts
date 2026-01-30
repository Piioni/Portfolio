import type { SocialLink } from '@/types';

export const SOCIAL_LINKS: readonly SocialLink[] = [
    {
        id: 'github',
        platform: 'github',
        url: 'https://github.com/username',
        label: 'GitHub',
    },
    {
        id: 'linkedin',
        platform: 'linkedin',
        url: 'https://linkedin.com/in/username',
        label: 'LinkedIn',
    },
    {
        id: 'twitter',
        platform: 'twitter',
        url: 'https://twitter.com/username',
        label: 'Twitter',
    },
    {
        id: 'email',
        platform: 'email',
        url: 'mailto:hello@example.com',
        label: 'Email',
    },
] as const;
