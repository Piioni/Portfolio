import type { Experience } from '@/types';

export const EXPERIENCES: readonly Experience[] = [
    {
        id: 'pegasus-medical',
        company: 'Pegasus Medical',
        role: 'Intern Software Developer',
        startDate: 'May 2025',
        endDate: 'July 2025',
        description:
            'Designed and developed a PHP/MySQL web application for centralized tracking of medical supplies across multiple hospitals. Implemented a secure role-based access control system, enabling administrators and staff to view/update inventory based on permissions. Implemented a secure role-based access system allowing administrators and staff to view and update stock according to their permissions.',

        technologies: ['Php', 'Docker', 'MySql', 'Html', 'Css', 'Javascript'],
    },
] as const;
