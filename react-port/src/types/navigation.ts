/**
 * Represents a navigation link item
 */
export interface NavLink {
    readonly label: string;
    readonly href: string;
    readonly isExternal?: boolean;
}
