import { SKILL_GROUPS } from '@/data';
import { SkillCard } from '@/components/compound';
import { cn } from '@/lib/utils';
import type { SkillGroup } from '@/types';

interface SkillsSectionProps {
    className?: string;
}

/** Renders a single skill category bubble */
function SkillBubble({ group }: { group: SkillGroup }) {
    return (
        <div className="bubble">
            {/* Category label */}
            <h3 className="text-xs font-semibold text-accent-lavender uppercase tracking-wider mb-3">{group.label}</h3>

            {/* Skills as flex-wrap pills */}
            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    );
}

/**
 * SkillsSection displays technical skills in a 2-row layout
 * Row 1: Frontend + Backend (larger categories)
 * Row 2: Database + Dev Tools + OS (smaller categories)
 */
export function SkillsSection({ className }: SkillsSectionProps) {
    // Separate groups into rows
    const topRow = SKILL_GROUPS.filter((g) => g.category === 'frontend' || g.category === 'backend');
    const bottomRow = SKILL_GROUPS.filter(
        (g) => g.category === 'database' || g.category === 'devtools' || g.category === 'os'
    );

    return (
        <section className={cn('py-8', className)} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Skills
            </h2>

            {/* Top row: Frontend + Backend (2 columns, centered) */}
            <div className="max-w-4xl mx-auto mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topRow.map((group) => (
                        <SkillBubble key={group.category} group={group} />
                    ))}
                </div>
            </div>

            {/* Bottom row: Database + Dev Tools + OS (3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bottomRow.map((group) => (
                    <SkillBubble key={group.category} group={group} />
                ))}
            </div>
        </section>
    );
}
