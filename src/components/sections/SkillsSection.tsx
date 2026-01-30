import { SKILL_GROUPS } from '@/data';
import { SkillCard } from '@/components/compound';
import { cn } from '@/lib/utils';

interface SkillsSectionProps {
    className?: string;
}

/**
 * SkillsSection displays technical skills organized by category
 */
export function SkillsSection({ className }: SkillsSectionProps) {
    return (
        <section className={cn('py-16', className)} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-bold text-primary mb-8">
                Skills
            </h2>

            <div className="space-y-8">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.category}>
                        {/* Category label */}
                        <h3 className="text-sm font-semibold text-accent-lavender uppercase tracking-wider mb-4">
                            {group.label}
                        </h3>

                        {/* Skills as flex-wrap pills */}
                        <div className="flex flex-wrap gap-3">
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
