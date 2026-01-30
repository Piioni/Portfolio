import { InterestTag } from '@/components/compound';
import { cn } from '@/lib/utils';

interface InterestsSectionProps {
    className?: string;
}

const INTERESTS = [
    { label: 'Open Source', emoji: '💻' },
    { label: 'Linux', emoji: '🐧' },
    { label: 'Reading', emoji: '📚' },
    { label: 'Movies', emoji: '🎬' },
    { label: 'Drawing', emoji: '🎨' },
    { label: 'Music', emoji: '🎵' },
    { label: 'Coffee', emoji: '☕' },
    { label: 'Gaming', emoji: '🎮' },
];

/**
 * InterestsSection displays personal interests and hobbies
 */
export function InterestsSection({ className }: InterestsSectionProps) {
    return (
        <section className={cn('py-16', className)} aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="text-2xl font-bold text-primary mb-8">
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
