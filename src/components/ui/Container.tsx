import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    /** Use full width instead of constrained */
    fluid?: boolean;
}

/**
 * Container component for consistent page layout
 * Centers content with 70% width (15% margin on each side)
 */
export function Container({ children, className, fluid = false }: ContainerProps) {
    return (
        <div className={cn('mx-auto w-full px-4', !fluid && 'max-w-[70%] lg:max-w-4xl xl:max-w-5xl', className)}>
            {children}
        </div>
    );
}
