import type {
  ExperienceItem,
  InterestItem,
  NavLinkItem,
  SkillGroupItem,
  SocialLinkItem,
} from '@/types/site'

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
]

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'github',
    platform: 'github',
    url: 'https://github.com/piioni',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/juan-rangel-002294300/?locale=en_US',
    label: 'LinkedIn',
  },
  {
    id: 'twitter',
    platform: 'twitter',
    url: 'https://twitter.com/Juann936',
    label: 'Twitter',
  },
  {
    id: 'email',
    platform: 'email',
    url: 'mailto:piioni.unwell796@slmail.me',
    label: 'Email',
  },
]

export const SKILL_GROUPS: SkillGroupItem[] = [
  {
    category: 'frontend',
    label: 'FrontEnd',
    skills: [
      { id: 'html', name: 'Html', category: 'frontend' },
      { id: 'javascript', name: 'JavaScript', category: 'frontend' },
      { id: 'typescript', name: 'TypeScript', category: 'frontend' },
      { id: 'react', name: 'React', category: 'frontend' },
      { id: 'tailwindcss', name: 'TailwindCSS', category: 'frontend' },
      { id: 'vite', name: 'Vite', category: 'frontend' },
    ],
  },
  {
    category: 'backend',
    label: 'BackEnd',
    skills: [
      { id: 'nestjs', name: 'NestJS', category: 'backend' },
      { id: 'laravel', name: 'Laravel', category: 'backend' },
      { id: 'python', name: 'Python', category: 'backend' },
      { id: 'java', name: 'Java', category: 'backend' },
      { id: 'php', name: 'Php', category: 'backend' },
      { id: 'bunjs', name: 'Bun', category: 'backend' },
    ],
  },
  {
    category: 'database',
    label: 'Database',
    skills: [
      { id: 'mongodb', name: 'MongoDB', category: 'database' },
      { id: 'mysql', name: 'MySql', category: 'database' },
      { id: 'postgresql', name: 'PostgreSQL', category: 'database' },
    ],
  },
  {
    category: 'devtools',
    label: 'Dev Tools',
    skills: [
      { id: 'git', name: 'Git', category: 'devtools' },
      { id: 'github', name: 'GitHub', category: 'devtools' },
      { id: 'docker', name: 'Docker', category: 'devtools' },
      { id: 'vim', name: 'Vim Motions', category: 'devtools' },
    ],
  },
  {
    category: 'os',
    label: 'Operating Systems',
    skills: [
      { id: 'archlinux', name: 'Arch', category: 'os' },
      { id: 'linux', name: 'Linux', category: 'os' },
      { id: 'windows', name: 'Windows', category: 'os' },
      { id: 'mac', name: 'Mac', category: 'os' },
    ],
  },
]

export const EXPERIENCES: ExperienceItem[] = [
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
]

export const INTERESTS: InterestItem[] = [
  { label: 'Open Source' },
  { label: 'Linux' },
  { label: 'Reading' },
  { label: 'Movies' },
  { label: 'Music' },
  { label: 'Coffee' },
  { label: 'Gaming' },
]
