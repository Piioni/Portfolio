import type { HTMLAttributes, ReactNode } from 'react';
import { createContext, forwardRef } from 'react';
import { cn } from '@/lib/utils';

/* ============================================
   Card Context for Compound Components
   ============================================ */
interface CardContextValue {
    hoverable: boolean;
}

const CardContext = createContext<CardContextValue>({ hoverable: false });

/* ============================================
   Card Root Component
   ============================================ */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** Enable hover glow effect */
    hoverable?: boolean;
}

/**
 * Card component with compound sub-components
 * Usage:
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Actions</Card.Footer>
 * </Card>
 */
const CardRoot = forwardRef<HTMLDivElement, CardProps>(({ children, hoverable = false, className, ...props }, ref) => {
    return (
        <CardContext.Provider value={{ hoverable }}>
            <div
                ref={ref}
                className={cn(
                    'rounded-xl border border-border-light dark:border-border-dark',
                    'bg-surface-light dark:bg-surface-dark',
                    'transition-all duration-300 ease-smooth',
                    hoverable && 'hover-glow cursor-pointer',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </CardContext.Provider>
    );
});

CardRoot.displayName = 'Card';

/* ============================================
   Card Header Sub-component
   ============================================ */
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn('px-5 py-4 border-b border-border-light dark:border-border-dark', className)}
            {...props}
        >
            {children}
        </div>
    );
});

CardHeader.displayName = 'CardHeader';

/* ============================================
   Card Body Sub-component
   ============================================ */
interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('px-5 py-4', className)} {...props}>
            {children}
        </div>
    );
});

CardBody.displayName = 'CardBody';

/* ============================================
   Card Footer Sub-component
   ============================================ */
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn('px-5 py-4 border-t border-border-light dark:border-border-dark', className)}
            {...props}
        >
            {children}
        </div>
    );
});

CardFooter.displayName = 'CardFooter';

/* ============================================
   Compound Component Export
   ============================================ */
export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
