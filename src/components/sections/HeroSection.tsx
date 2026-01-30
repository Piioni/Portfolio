import cattoImg from '@/assets/catto.jpg';
import { Avatar } from '@/components/ui';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
    className?: string;
}

/**
 * HeroSection - "Me, Myself and I" introduction section
 * Displays avatar, name, description, and tech stack inside a floating bubble
 */
export function HeroSection({ className }: HeroSectionProps) {
    return (
        <section className={cn('py-8 md:py-12', className)} aria-labelledby="hero-heading">
            {/* Section title */}
            <h2 className="section-title">Me, Myself and I</h2>

            {/* Bubble container */}
            <div className="hero-bubble">
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8">
                    {/* Avatar - centered vertically with content */}
                    <Avatar src={cattoImg} alt="Adithya's profile picture" size="xl" className="shrink-0" />

                    {/* Content */}
                    <div className="space-y-3">
                        {/* Greeting */}
                        <h1 id="hero-heading" className="text-2xl md:text-3xl font-bold text-primary">
                            Hi, I am <span className="text-accent-lavender">Adithya</span>
                        </h1>

                        {/* Description */}
                        <p className="text-muted max-w-2xl leading-relaxed">
                            I am a full stack developer, I watch movies and I read now and then.
                        </p>

                        {/* Technical info */}
                        <p className="text-muted text-sm">
                            I use Linux BTW. Currently I'm on{' '}
                            <span className="text-accent-lavender font-medium">NixOS</span>.
                        </p>

                        {/* Tech stack */}
                        <p className="text-muted text-sm">
                            My main tech stack is <span className="text-accent-lavender font-medium">NextJS</span>,{' '}
                            <span className="text-accent-lavender font-medium">TypeScript</span> and{' '}
                            <span className="text-accent-lavender font-medium">Tailwind</span>.
                        </p>

                        {/* Arts link */}
                        <p className="text-muted text-sm">
                            I like to draw. I mainly just recreate pictures from pinterest.{' '}
                            <a href="/arts" className="text-accent-lavender hover:underline underline-offset-4">
                                Check out the arts page
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
