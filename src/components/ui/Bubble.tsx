import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BubbleVariant = 'default' | 'hero' | 'card';

interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** Visual variant affecting padding and behavior */
    variant?: BubbleVariant;
    /** Enable hover animation (scale + border glow) - useful for clickable cards */
    hoverable?: boolean;
    /** HTML element to render as */
    as?: 'div' | 'article' | 'section';
}

const variantStyles: Record<BubbleVariant, string> = {
    default: 'p-4 md:p-6',
    hero: 'p-6 md:p-8',
    card: 'p-5 flex flex-col h-full',
};

/**
 * Bubble component - Semi-transparent container with blur effect
 *
 * Used for content grouping throughout the portfolio:
 * - Hero section introduction
 * - Skill category groups
 * - Project cards
 * - Blog post previews
 */
export function Bubble({
    children,
    variant = 'default',
    hoverable = false,
    as: Component = 'div',
    className,
    ...props
}: BubbleProps) {
    return (
        <Component
            className={cn(
                // Base styles
                'rounded-2xl',
                'border border-border-light dark:border-border-dark',
                'bg-bubble-light dark:bg-bubble-dark',
                'backdrop-blur-xs',
                // Variant-specific padding
                variantStyles[variant],
                // Hover animation (optional)
                hoverable && [
                    'transition-all duration-300 ease-smooth',
                    'hover:border-accent-lavender',
                    'hover:-translate-y-1 hover:scale-[1.02]',
                ],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
