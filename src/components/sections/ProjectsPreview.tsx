import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { FEATURED_PROJECTS } from '@/data';
import { ProjectCard } from '@/components/compound';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ProjectsPreviewProps {
    className?: string;
}

export function ProjectsPreview({ className }: ProjectsPreviewProps) {
    return (
        <section className={cn('py-8', className)} aria-labelledby="projects-heading">
            <div className="flex items-center justify-between mb-6">
                <h2 id="projects-heading" className="section-title mb-0!">
                    Featured Projects
                </h2>

                <Link to="/projects">
                    <Button variant="ghost" size="sm">
                        More projects
                        <FaArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                </Link>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
