import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark',
    primary: 'bg-accent-lavender/20 text-accent-lavender',
    secondary: 'bg-text-muted-light/10 dark:bg-text-muted-dark/10 text-text-muted-light dark:text-text-muted-dark',
    outline:
        'border border-border-light dark:border-border-dark bg-transparent text-text-primary-light dark:text-text-primary-dark',
};

const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
};

/**
 * Badge component for labels and tags
 * Commonly used for technology tags and status indicators
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ children, variant = 'default', size = 'sm', className, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-md font-medium',
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';
