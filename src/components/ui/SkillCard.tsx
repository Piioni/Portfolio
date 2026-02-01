import type { Skill } from '@/types';
import { cn } from '@/lib/utils';
import { getIconConfig } from '@/lib/iconConfig';

interface SkillCardProps {
    skill: Skill;
    className?: string;
}

/**
 * SkillCard component displays a single skill with icon and name
 * Compact pill-style with brand-colored icons
 */
export function SkillCard({ skill, className }: SkillCardProps) {
    const { icon: Icon, color: iconColor } = getIconConfig(skill.name);

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
            <span>{skill.name}</span>
        </span>
    );
}
