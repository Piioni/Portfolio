import { InterestTag } from '@/components/compound';
import { cn } from '@/lib/utils';
import { INTERESTS } from '@/data';

interface InterestsSectionProps {
    className?: string;
}

export function InterestsSection({ className }: InterestsSectionProps) {
    return (
        <section className={cn('py-8', className)} aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="section-title">
                Interests
            </h2>

            <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest) => (
                    <InterestTag key={interest.label} label={interest.label} emoji={interest.emoji} />
                ))}
            </div>
        </section>
    );
}
