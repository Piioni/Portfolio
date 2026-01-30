import {
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNestjs,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiApple,
    SiVite,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiSocketdotio,
    SiStripe,
} from 'react-icons/si';
import { FaJava, FaWindows } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { Skill } from '@/types';
import { cn } from '@/lib/utils';

interface SkillCardProps {
    skill: Skill;
    className?: string;
}

/**
 * Icon mapping from string names to react-icons components
 */
const iconMap: Record<string, IconType> = {
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNestjs,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiApple,
    SiWindows: FaWindows,
    SiVite,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiSocketdotio,
    SiStripe,
    FaJava,
};

/**
 * SkillCard component displays a single skill with icon and name
 * Compact pill-style similar to InterestTag
 */
export function SkillCard({ skill, className }: SkillCardProps) {
    const Icon = iconMap[skill.icon];

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
            {Icon && <Icon className="w-4 h-4 shrink-0" />}
            <span>{skill.name}</span>
        </span>
    );
}
