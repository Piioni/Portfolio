/**
 * Skill category types for organizing technical skills
 */
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devtools' | 'os';

/**
 * Represents a technical skill with icon and categorization
 */
export interface Skill {
    readonly id: string;
    readonly name: string;
    readonly icon: string;
    readonly category: SkillCategory;
}

/**
 * Grouped skills by category for section rendering
 */
export interface SkillGroup {
    readonly category: SkillCategory;
    readonly label: string;
    readonly skills: readonly Skill[];
}
