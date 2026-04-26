import { cn } from '@/lib/utils';
import { getIconConfig } from '@/lib/iconConfig';

interface BadgeProps {
    label: string;
    className?: string;
}

/**
 * Badge component displays a label with icon
 * Used for displaying technologies, interests, and tags
 */
export function Badge({ label, className }: BadgeProps) {
    const { icon: Icon, color: iconColor } = getIconConfig(label);

    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full',
                'bg-surface border-themed',
                'text-sm font-medium text-primary',
                'transition-all duration-300 ease-smooth',
                'hover:border-accent-lavender-light dark:hover:border-accent-lavender-dark hover:scale-105',
                className
            )}
        >
            {Icon && <Icon className="w-4 h-4 shrink-0" style={{ color: iconColor }} />}
            <span>{label}</span>
        </span>
    );
}
