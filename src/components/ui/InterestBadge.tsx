import { cn } from '@/lib/utils';
import { getInterestIcon } from '@/lib/iconConfig';

interface InterestBadgeProps {
    label: string;
    className?: string;
}

/**
 * InterestBadge component for displaying personal interests/hobbies
 */
export function InterestBadge({ label, className }: InterestBadgeProps) {
    const { icon: Icon, color: iconColor } = getInterestIcon(label);

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
            {Icon && <Icon className="w-4 h-4 shrink-0" style={{ color: iconColor }} />}
            <span>{label}</span>
        </span>
    );
}
