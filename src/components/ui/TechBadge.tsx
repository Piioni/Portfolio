import { cn } from '@/lib/utils';
import { getIconConfig } from '@/lib/iconConfig';

interface TechBadgeProps {
    name: string;
    className?: string;
}

/**
 * TechBadge component displays a technology with icon and name
 * Used for displaying tech stacks in projects, skills, and experiences
 */
export function TechBadge({ name, className }: TechBadgeProps) {
    const { icon: Icon, color: iconColor } = getIconConfig(name);

    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
                'bg-surface border-themed',
                'text-sm font-medium text-primary',
                'transition-all duration-300 ease-smooth',
                'hover:border-accent-lavender hover:scale-105',
                className
            )}
        >
            {Icon && <Icon className="w-4 h-4 shrink-0" style={{ color: iconColor }} />}
            <span>{name}</span>
        </span>
    );
}
