import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNestjs,
    SiLaravel,
    SiPhp,
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
    SiApache,
    SiNodedotjs,
    SiExpress,
    SiLinkedin,
} from 'react-icons/si';
import { FaJava, FaWindows, FaEnvelope, FaTwitter } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { SocialPlatform } from '@/types';

export interface IconConfig {
    icon: IconType;
    color: string;
}

/**
 * Centralized icon configuration with brand colors
 * Maps technology names to their respective icons and colors
 * Keys are normalized to lowercase for case-insensitive matching
 */
export const TECH_ICONS: Record<string, IconConfig> = {
    // Frontend
    html: { icon: SiHtml5, color: '#E34F26' },
    css: { icon: SiCss3, color: '#1572B6' },
    javascript: { icon: SiJavascript, color: '#F7DF1E' },
    typescript: { icon: SiTypescript, color: '#3178C6' },
    react: { icon: SiReact, color: '#61DAFB' },
    tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
    vite: { icon: SiVite, color: '#646CFF' },
    'next.js': { icon: SiNextdotjs, color: '#ffffff' },
    ajax: { icon: SiJavascript, color: '#F7DF1E' },

    // Backend
    nestjs: { icon: SiNestjs, color: '#E0234E' },
    laravel: { icon: SiLaravel, color: '#FF2D20' },
    php: { icon: SiPhp, color: '#777BB4' },
    java: { icon: FaJava, color: '#ED8B00' },
    'node.js': { icon: SiNodedotjs, color: '#339933' },
    nodejs: { icon: SiNodedotjs, color: '#339933' },
    express: { icon: SiExpress, color: '#000000' },

    // Database
    mongodb: { icon: SiMongodb, color: '#47A248' },
    mysql: { icon: SiMysql, color: '#4479A1' },
    sql: { icon: SiMysql, color: '#4479A1' },
    postgresql: { icon: SiPostgresql, color: '#4169E1' },
    prisma: { icon: SiPrisma, color: '#2D3748' },

    // Tools
    git: { icon: SiGit, color: '#F05032' },
    github: { icon: SiGithub, color: '#ffffff' },
    docker: { icon: SiDocker, color: '#2496ED' },
    'socket.io': { icon: SiSocketdotio, color: '#010101' },
    stripe: { icon: SiStripe, color: '#635BFF' },
    'vs code': { icon: SiVscodium, color: '#007ACC' },
    vscode: { icon: SiVscodium, color: '#007ACC' },
    apache: { icon: SiApache, color: '#D22128' },

    // OS
    linux: { icon: SiLinux, color: '#FCC624' },
    macos: { icon: SiApple, color: '#999999' },
    mac: { icon: SiApple, color: '#999999' },
    windows: { icon: FaWindows, color: '#0078D6' },
};

/**
 * Social media icon configuration
 */
export const SOCIAL_ICONS: Record<SocialPlatform, IconType> = {
    github: SiGithub,
    linkedin: SiLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope,
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
 * @param techName - Technology name (e.g., "React", "TypeScript", "react", "typescript")
 * @returns Icon configuration with icon component and color
 */
export function getIconConfig(techName: string): IconConfig {
    const normalizedName = techName.toLowerCase();
    return TECH_ICONS[normalizedName] || DEFAULT_ICON_CONFIG;
}

/**
 * Gets social media icon component
 * @param platform - Social platform name
 * @returns Icon component
 */
export function getSocialIcon(platform: SocialPlatform): IconType {
    return SOCIAL_ICONS[platform];
}
