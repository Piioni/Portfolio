import { Container } from '@/components/ui';
import { ProjectCard } from '@/components/compound';
import { PROJECTS } from '@/data';

export default function Projects() {
    return (
        <Container>
            <section>
                <h1 className="text-3xl font-bold text-text-primary-light dark:text-accent-lavender-dark mb-8">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </Container>
    );
}
