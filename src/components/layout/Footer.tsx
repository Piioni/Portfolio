import { SOCIAL_LINKS } from '@/data';
import { Container, SocialIcon } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FooterProps {
    className?: string;
}

/**
 * Footer component with social links
 */
export function Footer({ className }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn('py-8 mt-auto', 'border-t border-border-light dark:border-border-dark', className)}>
            <Container>
                <div className="flex flex-col items-center gap-4">
                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {SOCIAL_LINKS.map((social) => (
                            <SocialIcon
                                key={social.id}
                                platform={social.platform}
                                href={social.url}
                                label={social.label}
                            />
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        © {currentYear} Adithya. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
