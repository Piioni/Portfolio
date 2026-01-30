/**
 * Represents a professional work experience entry
 */
export interface Experience {
    readonly id: string;
    readonly company: string;
    readonly role: string;
    readonly startDate: string;
    readonly endDate?: string;
    readonly description: string;
    readonly technologies: readonly string[];
}
