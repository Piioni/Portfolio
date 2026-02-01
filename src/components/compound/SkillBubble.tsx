import type { SkillGroup } from '@/types';
import { Bubble } from '@/components/ui';
import { TechBadge } from '@/components/ui';

interface SkillBubbleProps {
    group: SkillGroup;
}

/**
 * SkillBubble component displays a skill category with its technologies
 * Used within SkillsSection to group related skills
 */
export function SkillBubble({ group }: SkillBubbleProps) {
    return (
        <Bubble>
            {/* Category label */}
            <h3 className="text-xs font-semibold text-accent-lavender uppercase tracking-wider mb-3">{group.label}</h3>

            {/* Skills as flex-wrap pills */}
            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <TechBadge key={skill.id} name={skill.name} />
                ))}
            </div>
        </Bubble>
    );
}
