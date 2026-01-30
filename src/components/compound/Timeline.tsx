import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
    children: ReactNode;
    className?: string;
}

/**
 * Timeline component for displaying chronological entries
 * Works with ExperienceCard for work history display
 */
export function Timeline({ children, className }: TimelineProps) {
    return <div className={cn('relative', className)}>{children}</div>;
}
