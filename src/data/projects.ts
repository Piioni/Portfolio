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
        title: 'Task Management App',
        description:
            'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
        technologies: ['React', 'NestJS', 'MongoDB', 'Socket.io'],
        githubUrl: 'https://github.com/username/task-app',
        featured: true,
    },
    {
        id: 'project-3',
        title: 'E-Commerce Platform',
        description:
            'A scalable e-commerce solution with product management, cart functionality, and payment integration.',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://shop.example.com',
        featured: true,
    },
] as const;

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
