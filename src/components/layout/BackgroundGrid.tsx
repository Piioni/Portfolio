import { cn } from '@/lib/utils';

interface BackgroundGridProps {
    className?: string;
}

/**
 * BackgroundGrid component renders a subtle grid pattern
 * Fixed position behind all content, adapts to theme
 */
export function BackgroundGrid({ className }: BackgroundGridProps) {
    return (
        <>
            {/* Dark mode grid */}
            <div
                aria-hidden="true"
                className={cn('fixed inset-0 -z-10 h-full w-full pointer-events-none', 'hidden dark:block', className)}
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, hsla(0, 0%, 100%, 0.03) 1px, transparent 1px),
                        linear-gradient(180deg, hsla(0, 0%, 100%, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                }}
            />
            {/* Light mode grid */}
            <div
                aria-hidden="true"
                className={cn('fixed inset-0 -z-10 h-full w-full pointer-events-none', 'block dark:hidden', className)}
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, hsla(0, 0%, 0%, 0.05) 1px, transparent 1px),
                        linear-gradient(180deg, hsla(0, 0%, 0%, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                }}
            />
        </>
    );
}
