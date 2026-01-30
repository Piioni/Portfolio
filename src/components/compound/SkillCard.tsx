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
    SiVscodium,
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
 * Icon mapping with their brand colors
 */
const iconConfig: Record<string, { icon: IconType; color: string }> = {
    SiHtml5: { icon: SiHtml5, color: '#E34F26' },
    SiCss3: { icon: SiCss3, color: '#1572B6' },
    SiTypescript: { icon: SiTypescript, color: '#3178C6' },
    SiReact: { icon: SiReact, color: '#61DAFB' },
    SiTailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
    SiNestjs: { icon: SiNestjs, color: '#E0234E' },
    SiLaravel: { icon: SiLaravel, color: '#FF2D20' },
    SiMongodb: { icon: SiMongodb, color: '#47A248' },
    SiMysql: { icon: SiMysql, color: '#4479A1' },
    SiGit: { icon: SiGit, color: '#F05032' },
    SiGithub: { icon: SiGithub, color: '#ffffff' },
    SiDocker: { icon: SiDocker, color: '#2496ED' },
    SiLinux: { icon: SiLinux, color: '#FCC624' },
    SiApple: { icon: SiApple, color: '#999999' },
    SiWindows: { icon: FaWindows, color: '#0078D6' },
    SiVite: { icon: SiVite, color: '#646CFF' },
    SiNextdotjs: { icon: SiNextdotjs, color: '#ffffff' },
    SiPostgresql: { icon: SiPostgresql, color: '#4169E1' },
    SiPrisma: { icon: SiPrisma, color: '#2D3748' },
    SiSocketdotio: { icon: SiSocketdotio, color: '#010101' },
    SiStripe: { icon: SiStripe, color: '#635BFF' },
    FaJava: { icon: FaJava, color: '#ED8B00' },
    SiVscodium: { icon: SiVscodium, color: '#007ACC' },
};

/**
 * SkillCard component displays a single skill with icon and name
 * Compact pill-style with brand-colored icons
 */
export function SkillCard({ skill, className }: SkillCardProps) {
    const config = iconConfig[skill.icon];
    const Icon = config?.icon;
    const iconColor = config?.color || '#888888';

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
