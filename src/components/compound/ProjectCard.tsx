import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';
import { Bubble } from '@/components/ui';
import { cn } from '@/lib/utils';
import { SkillCard } from './SkillCard';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

/**
 * Maps technology names to icon identifiers
 */
const techIconMap: Record<string, string> = {
    React: 'SiReact',
    TypeScript: 'SiTypescript',
    TailwindCSS: 'SiTailwindcss',
    Vite: 'SiVite',
    NestJS: 'SiNestjs',
    MongoDB: 'SiMongodb',
    'Next.js': 'SiNextdotjs',
    PostgreSQL: 'SiPostgresql',
    Prisma: 'SiPrisma',
    'Socket.io': 'SiSocketdotio',
    Stripe: 'SiStripe',
};

/**
 * ProjectCard component displays a project preview
 * Shows title, description, technologies, and links with hover animation
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Bubble variant="card" hoverable as="article" className={cn(className)}>
            {/* Title */}
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm mb-4 grow">{project.description}</p>

            {/* Technologies using SkillCard style */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <SkillCard
                        key={tech}
                        skill={{
                            id: tech.toLowerCase(),
                            name: tech,
                            icon: techIconMap[tech] || 'SiReact',
                            category: 'frontend',
                        }}
                    />
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-auto pt-3 border-t border-border-light dark:border-border-dark">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-muted"
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-muted"
                        aria-label={`View ${project.title} live demo`}
                    >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        <span>Demo</span>
                    </a>
                )}
            </div>
        </Bubble>
    );
}
