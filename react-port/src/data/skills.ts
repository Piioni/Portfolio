import type { SkillGroup } from '@/types';

export const SKILL_GROUPS: readonly SkillGroup[] = [
    {
        category: 'frontend',
        label: 'FrontEnd',
        skills: [
            { id: 'html', name: 'Html', icon: 'SiHtml5', category: 'frontend' },
            { id: 'javascript', name: 'JavaScript', icon: 'SiJavascript', category: 'frontend' },
            { id: 'typescript', name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
            { id: 'react', name: 'React', icon: 'SiReact', category: 'frontend' },
            { id: 'tailwindcss', name: 'TailwindCSS', icon: 'SiTailwindcss', category: 'frontend' },
            { id: 'vite', name: 'Vite', icon: 'SiVite', category: 'frontend' },
        ],
    },
    {
        category: 'backend',
        label: 'BackEnd',
        skills: [
            { id: 'nestjs', name: 'NestJS', icon: 'SiNestjs', category: 'backend' },
            { id: 'laravel', name: 'Laravel', icon: 'SiLaravel', category: 'backend' },
            { id: 'python', name: 'Python', icon: 'SiPython', category: 'backend' },
            { id: 'java', name: 'Java', icon: 'FaJava', category: 'backend' },
            { id: 'php', name: 'Php', icon: 'SiPhp', category: 'backend' },
            { id: 'bunjs', name: 'Bun', icon: 'SiBun', category: 'backend' },
        ],
    },
    {
        category: 'database',
        label: 'Database',
        skills: [
            { id: 'mongodb', name: 'MongoDB', icon: 'SiMongodb', category: 'database' },
            { id: 'mysql', name: 'MySql', icon: 'SiMysql', category: 'database' },
            { id: 'postgresql', name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database' },
        ],
    },
    {
        category: 'devtools',
        label: 'Dev Tools',
        skills: [
            { id: 'git', name: 'Git', icon: 'SiGit', category: 'devtools' },
            { id: 'github', name: 'GitHub', icon: 'SiGithub', category: 'devtools' },
            { id: 'docker', name: 'Docker', icon: 'SiDocker', category: 'devtools' },
            { id: 'vim', name: 'Vim Motions', icon: 'SiVim', category: 'devtools' },
        ],
    },
    {
        category: 'os',
        label: 'Operating Systems',
        skills: [
            { id: 'archlinux', name: 'Arch', icon: 'SiArchlinux', category: 'os' },
            { id: 'linux', name: 'Linux', icon: 'SiLinux', category: 'os' },
            { id: 'windows', name: 'Windows', icon: 'SiWindows', category: 'os' },
            { id: 'mac', name: 'Mac', icon: 'SiApple', category: 'os' },
        ],
    },
] as const;
