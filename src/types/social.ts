/**
 * Supported social media platforms
 */
export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email';

/**
 * Represents a social media link
 */
export interface SocialLink {
    readonly id: string;
    readonly platform: SocialPlatform;
    readonly url: string;
    readonly label: string;
}
