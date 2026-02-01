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

export interface IconConfig {
    icon: IconType;
    color: string;
}

/**
 * Centralized icon configuration with brand colors
 * Maps technology names to their respective icons and colors
 */
export const TECH_ICONS: Record<string, IconConfig> = {
    // Frontend
    HTML: { icon: SiHtml5, color: '#E34F26' },
    CSS: { icon: SiCss3, color: '#1572B6' },
    TypeScript: { icon: SiTypescript, color: '#3178C6' },
    React: { icon: SiReact, color: '#61DAFB' },
    TailwindCSS: { icon: SiTailwindcss, color: '#06B6D4' },
    Vite: { icon: SiVite, color: '#646CFF' },
    'Next.js': { icon: SiNextdotjs, color: '#ffffff' },

    // Backend
    NestJS: { icon: SiNestjs, color: '#E0234E' },
    Laravel: { icon: SiLaravel, color: '#FF2D20' },
    Java: { icon: FaJava, color: '#ED8B00' },

    // Database
    MongoDB: { icon: SiMongodb, color: '#47A248' },
    MySQL: { icon: SiMysql, color: '#4479A1' },
    PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
    Prisma: { icon: SiPrisma, color: '#2D3748' },

    // Tools
    Git: { icon: SiGit, color: '#F05032' },
    GitHub: { icon: SiGithub, color: '#ffffff' },
    Docker: { icon: SiDocker, color: '#2496ED' },
    'Socket.io': { icon: SiSocketdotio, color: '#010101' },
    Stripe: { icon: SiStripe, color: '#635BFF' },
    VSCode: { icon: SiVscodium, color: '#007ACC' },

    // OS
    Linux: { icon: SiLinux, color: '#FCC624' },
    macOS: { icon: SiApple, color: '#999999' },
    Windows: { icon: FaWindows, color: '#0078D6' },
};

/**
 * Default fallback icon configuration
 */
const DEFAULT_ICON_CONFIG: IconConfig = {
    icon: SiReact,
    color: '#888888',
};

/**
 * Gets icon configuration for a technology
 * @param techName - Technology name (e.g., "React", "TypeScript")
 * @returns Icon configuration with icon component and color
 */
export function getIconConfig(techName: string): IconConfig {
    return TECH_ICONS[techName] || DEFAULT_ICON_CONFIG;
}
