import { SKILL_GROUPS } from '@/data';
import { SkillBubble } from '@/components/compound';
import { cn } from '@/lib/utils';

interface SkillsSectionProps {
    className?: string;
}

export function SkillsSection({ className }: SkillsSectionProps) {
    // Separate groups into rows
    const topRow = SKILL_GROUPS.filter((g) => g.category === 'frontend' || g.category === 'backend');
    const bottomRow = SKILL_GROUPS.filter(
        (g) => g.category === 'database' || g.category === 'devtools' || g.category === 'os'
    );

    return (
        <section className={cn('py-12', className)} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title">
                Skills
            </h2>

            {/* Top row: Frontend + Backend (2 columns, full width) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
                {topRow.map((group) => (
                    <SkillBubble key={group.category} group={group} />
                ))}
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
