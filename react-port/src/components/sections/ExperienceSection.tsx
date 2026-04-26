import { EXPERIENCES } from '@/data';
import { ExperienceCard } from '@/components/compound';
import { cn } from '@/lib/utils';

interface ExperienceSectionProps {
    className?: string;
}

export function ExperienceSection({ className }: ExperienceSectionProps) {
    return (
        <section className={cn('py-12', className)} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-title">
                Experience
            </h2>

            <div className="relative">
                {EXPERIENCES.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    );
}
