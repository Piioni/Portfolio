import type { Experience } from '@/types';

export const EXPERIENCES: readonly Experience[] = [
    {
        id: 'tripcrops',
        company: 'Tripcrops',
        role: 'Full Stack Web Developer',
        startDate: '2024-11',
        endDate: undefined,
        description:
            'Developed a user authentication system and integrated database functionalities using Firebase. Designed and implemented multiple dynamic pages tailored for various user interactions and purposes.',
        technologies: ['React', 'Firebase', 'TypeScript', 'TailwindCSS'],
    },
] as const;
