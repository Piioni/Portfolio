import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a readable format
 * @param dateString - ISO date string (e.g., "2024-11")
 * @returns Formatted date (e.g., "Nov 2024")
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

/**
 * Generates a date range string for experience entries
 * @param startDate - Start date ISO string
 * @param endDate - Optional end date ISO string (undefined = "Present")
 */
export function formatDateRange(startDate: string, endDate?: string): string {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
}
