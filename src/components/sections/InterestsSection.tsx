import { InterestBadge } from '@/components/ui';
import { cn } from '@/lib/utils';
import { INTERESTS } from '@/data';

interface InterestsSectionProps {
    className?: string;
}

export function InterestsSection({ className }: InterestsSectionProps) {
    return (
        <section className={cn('py-12', className)} aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="section-title">
                Interests
            </h2>

            <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest) => (
                    <InterestBadge key={interest.label} label={interest.label} />
                ))}
            </div>
        </section>
    );
}
