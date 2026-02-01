import type { Experience } from '@/types';
import { TechBadge } from '@/components/ui';
import { formatDateRange, cn } from '@/lib/utils';

interface ExperienceCardProps {
    experience: Experience;
    className?: string;
}

/**
 * ExperienceCard component displays a single work experience entry
 * Designed to be used within a Timeline component
 */
export function ExperienceCard({ experience, className }: ExperienceCardProps) {
    const dateRange = formatDateRange(experience.startDate, experience.endDate);

    return (
        <div
            className={cn(
                'relative pl-6 pb-8 last:pb-0',
                // Timeline line
                'before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px',
                'before:bg-border-light dark:before:bg-border-dark',
                'last:before:hidden',
                className
            )}
        >
            {/* Timeline dot */}
            <div
                className={cn(
                    'absolute left-0 top-2 w-2.5 h-2.5 -translate-x-1/2 rounded-full',
                    'bg-accent-lavender shadow-glow-lavender'
                )}
            />

            {/* Content */}
            <div className="ml-4">
                {/* Date range */}
                <span className="text-xs font-medium text-accent-lavender uppercase tracking-wider">{dateRange}</span>

                {/* Role and company */}
                <h3 className="mt-1 text-lg font-semibold text-primary">{experience.role}</h3>
                <p className="text-sm text-muted">{experience.company}</p>

                {/* Description */}
                <p className="mt-3 text-sm text-muted leading-relaxed">{experience.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {experience.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}
