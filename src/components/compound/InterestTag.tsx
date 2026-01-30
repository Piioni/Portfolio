import { cn } from '@/lib/utils';

interface InterestTagProps {
    label: string;
    emoji?: string;
    className?: string;
}

/**
 * InterestTag component for displaying personal interests/hobbies
 */
export function InterestTag({ label, emoji, className }: InterestTagProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full',
                'bg-surface border-themed',
                'text-sm font-medium text-primary',
                'transition-all duration-300 ease-smooth',
                'hover:border-accent-lavender hover:scale-105',
                className
            )}
        >
            {emoji && <span>{emoji}</span>}
            <span>{label}</span>
        </span>
    );
}
