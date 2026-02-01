import type { Experience } from '@/types';

export const EXPERIENCES: readonly Experience[] = [
    {
        id: 'pegasus-medical',
        company: 'Pegasus Medical',
        role: 'Intern Software Developer',
        startDate: '2025-04',
        endDate: '2025-06',
        description:
            'Designed and developed a PHP/MySQL web application for centralized tracking of medical supplies across multiple hospitals. Implemented a secure role-based access control system, enabling administrators and staff to view/update inventory based on permissions.',
        highlights: [
            'Followed MVC (Model-View-Controller) architecture for clean, scalable, and maintainable code.',
            'Containerized the PHP application and database using Docker, ensuring consistent deployment and development environments.',
        ],
        technologies: ['Php', 'Docker', 'MySql', 'Html', 'Css', 'Javascript', 'Apache'],
    },
] as const;
