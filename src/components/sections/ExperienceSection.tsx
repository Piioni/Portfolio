import { EXPERIENCES } from '@/data';
import { Timeline, ExperienceCard } from '@/components/compound';
import { cn } from '@/lib/utils';

interface ExperienceSectionProps {
    className?: string;
}

/**
 * ExperienceSection displays work history in a vertical timeline
 */
export function ExperienceSection({ className }: ExperienceSectionProps) {
    return (
        <section className={cn('py-16', className)} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-2xl font-bold text-primary mb-8">
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
