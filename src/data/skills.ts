import type { SkillGroup } from '@/types';

export const SKILL_GROUPS: readonly SkillGroup[] = [
    {
        category: 'frontend',
        label: 'FrontEnd',
        skills: [
            { id: 'html', name: 'HTML', icon: 'SiHtml5', category: 'frontend' },
            { id: 'css', name: 'CSS', icon: 'SiCss3', category: 'frontend' },
            { id: 'typescript', name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
            { id: 'react', name: 'React', icon: 'SiReact', category: 'frontend' },
            { id: 'react-native', name: 'React Native', icon: 'SiReact', category: 'frontend' },
            { id: 'tailwindcss', name: 'TailwindCSS', icon: 'SiTailwindcss', category: 'frontend' },
        ],
    },
    {
        category: 'backend',
        label: 'BackEnd',
        skills: [
            { id: 'nestjs', name: 'NestJS', icon: 'SiNestjs', category: 'backend' },
            { id: 'laravel', name: 'Laravel', icon: 'SiLaravel', category: 'backend' },
            { id: 'java', name: 'Java', icon: 'FaJava', category: 'backend' },
        ],
    },
    {
        category: 'database',
        label: 'Database',
        skills: [
            { id: 'mongodb', name: 'MongoDB', icon: 'SiMongodb', category: 'database' },
            { id: 'sql', name: 'SQL', icon: 'SiMysql', category: 'database' },
        ],
    },
    {
        category: 'devtools',
        label: 'Dev Tools',
        skills: [
            { id: 'git', name: 'Git', icon: 'SiGit', category: 'devtools' },
            { id: 'github', name: 'GitHub', icon: 'SiGithub', category: 'devtools' },
            { id: 'docker', name: 'Docker', icon: 'SiDocker', category: 'devtools' },
        ],
    },
    {
        category: 'os',
        label: 'Operating Systems',
        skills: [
            { id: 'linux', name: 'Linux', icon: 'SiLinux', category: 'os' },
            { id: 'mac', name: 'Mac', icon: 'SiApple', category: 'os' },
            { id: 'windows', name: 'Windows', icon: 'SiWindows', category: 'os' },
        ],
    },
] as const;
