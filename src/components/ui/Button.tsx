import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Full width button */
    fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-accent-lavender-light dark:bg-accent-lavender-dark text-white hover:bg-accent-lavender-hover-light dark:hover:bg-accent-lavender-hover-dark shadow-sm',
    secondary:
        'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:opacity-90',
    ghost: 'bg-transparent hover:bg-surface-light dark:hover:bg-surface-dark text-text-primary-light dark:text-text-primary-dark',
    outline:
        'border border-border-light dark:border-border-dark bg-transparent hover:bg-surface-light dark:hover:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover-glow',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

/**
 * Button component with variants and sizes
 * Follows accessibility best practices with proper focus states
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', size = 'md', fullWidth = false, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium',
                    'transition-all duration-300 ease-smooth',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    variantStyles[variant],
                    sizeStyles[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
