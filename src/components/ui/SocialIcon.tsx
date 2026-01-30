import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import type { SocialPlatform } from '@/types';
import { cn } from '@/lib/utils';

interface SocialIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    platform: SocialPlatform;
    href: string;
    label: string;
}

const platformIcons: Record<SocialPlatform, typeof FaGithub> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope,
};

/**
 * Social media icon link component
 * Renders appropriate icon based on platform with hover effects
 */
export const SocialIcon = forwardRef<HTMLAnchorElement, SocialIconProps>(
    ({ platform, href, label, className, ...props }, ref) => {
        const Icon = platformIcons[platform];

        return (
            <a
                ref={ref}
                href={href}
                target={platform !== 'email' ? '_blank' : undefined}
                rel={platform !== 'email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={cn(
                    'inline-flex items-center justify-center',
                    'w-10 h-10 rounded-lg',
                    'text-text-muted-light dark:text-text-muted-dark',
                    'hover:text-accent-lavender hover:bg-accent-lavender/10',
                    'transition-all duration-300 ease-smooth',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender',
                    className
                )}
                {...props}
            >
                <Icon className="w-5 h-5" />
            </a>
        );
    }
);

SocialIcon.displayName = 'SocialIcon';
