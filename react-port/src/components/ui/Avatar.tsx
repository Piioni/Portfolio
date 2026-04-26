import type { ImgHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
    src: string;
    alt: string;
    size?: AvatarSize;
}

const sizeStyles: Record<AvatarSize, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
};

/**
 * Avatar component for user profile images
 * Displays a circular image with hover glow effect
 */
export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
    ({ src, alt, size = 'md', className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    'relative overflow-hidden rounded-full',
                    'border-2 border-accent-lavender-light/30 dark:border-accent-lavender-dark/30',
                    'transition-all duration-300 ease-smooth',
                    'hover:border-accent-lavender-light dark:hover:border-accent-lavender-dark hover:shadow-[0_0_20px_oklch(0.6_0.18_290/0.4)] dark:hover:shadow-[0_0_20px_oklch(0.72_0.12_290/0.3)]',
                    'hover:scale-110 hover:rotate-3',
                    sizeStyles[size],
                    className
                )}
            >
                <img ref={ref} src={src} alt={alt} className="h-full w-full object-cover" {...props} />
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';
