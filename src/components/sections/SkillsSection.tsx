import { SKILL_GROUPS } from '@/data';
import { SkillCard } from '@/components/compound';
import { cn } from '@/lib/utils';

interface SkillsSectionProps {
    className?: string;
}

/**
 * SkillsSection displays technical skills in an attractive grid layout
 */
export function SkillsSection({ className }: SkillsSectionProps) {
    return (
        <section className={cn('py-8', className)} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Skills
            </h2>

            {/* Grid layout for skill categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.category} className="p-4 rounded-xl bg-surface border-themed">
                        {/* Category label */}
                        <h3 className="text-xs font-semibold text-accent-lavender uppercase tracking-wider mb-3">
                            {group.label}
                        </h3>

                        {/* Skills as flex-wrap pills */}
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
