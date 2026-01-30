import { EXPERIENCES } from '@/data';
import { Timeline, ExperienceCard } from '@/components/compound';
import { cn } from '@/lib/utils';

interface ExperienceSectionProps {
    className?: string;
}

export function ExperienceSection({ className }: ExperienceSectionProps) {
    return (
        <section className={cn('py-8', className)} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-title">
                Experience
            </h2>

            <Timeline>
                {EXPERIENCES.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </Timeline>
        </section>
    );
}
