import type { Project } from '@/types';

export const PROJECTS: readonly Project[] = [
    {
        id: 'project-1',
        title: 'Portfolio Website',
        description:
            'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme toggle and smooth animations.',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
        githubUrl: 'https://github.com/username/portfolio',
        liveUrl: 'https://portfolio.dev',
        featured: true,
    },
    {
        id: 'project-2',
        title: 'Pegasus Medical Supply Tracker',
        description:
            'A web application for tracking medical supplies across multiple hospitals, featuring role-based access control and real-time inventory updates.',
        technologies: ['NestJS', 'MongoDB', 'Socket.io', 'Stripe'],
        githubUrl: 'https://github.com/Piioni/Pegasus-Medical-WebPage',
        featured: true,
    },
] as const;

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
