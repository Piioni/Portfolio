import { Container } from '@/components/ui';
import { Timeline, ExperienceCard } from '@/components/compound';
import { EXPERIENCES } from '@/data';

/**
 * Experience page - detailed work history
 * Lazy loaded for performance
 */
export default function Experience() {
    return (
        <Container>
            <section className="py-8">
                <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
                    Experience
                </h1>

                <Timeline>
                    {EXPERIENCES.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </Timeline>
            </section>
        </Container>
    );
}
