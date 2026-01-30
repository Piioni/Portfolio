import type { SocialLink } from '@/types';

export const SOCIAL_LINKS: readonly SocialLink[] = [
    {
        id: 'github',
        platform: 'github',
        url: 'https://github.com/piioni',
        label: 'GitHub',
    },
    {
        id: 'linkedin',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/juan-rangel-002294300/?locale=en_US',
        label: 'LinkedIn',
    },
    {
        id: 'twitter',
        platform: 'twitter',
        url: 'https://twitter.com/Juann936',
        label: 'Twitter',
    },
    {
        id: 'email',
        platform: 'email',
        url: 'mailto:piioni.unwell796@slmail.me',
        label: 'Email',
    },
] as const;
