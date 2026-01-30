import profile_picture from '@/assets/rei.webp';
import { Avatar, Bubble } from '@/components/ui';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
    className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
    return (
        <section className={cn('py-8 md:py-12', className)} aria-labelledby="hero-heading">
            <h2 className="section-title">Me, Myself and I</h2>

            <Bubble variant="hero">
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8">
                    <Avatar src={profile_picture} alt="Piioni's profile picture" size="xl" className="shrink-0" />

                    <div className="space-y-3">
                        <h1 id="hero-heading" className="text-2xl md:text-3xl font-bold text-primary">
                            Hi! I am <span className="text-accent-lavender">Piioni</span>
                        </h1>

                        <p className="text-muted max-w-2xl leading-relaxed">
                            I am a full stack developer, I love coding and creating new things.
                        </p>

                        <p className="text-muted text-sm">
                            My main tech stack is <span className="text-accent-lavender font-medium">React</span>,{' '}
                            <span className="text-accent-lavender font-medium">TypeScript</span> and{' '}
                            <span className="text-accent-lavender font-medium">Tailwind</span>.
                        </p>

                        <p className="text-muted text-sm">
                            I enjoy Docker and DevOps practices, always looking for ways to improve deployment workflows
                            and CI/CD pipelines.
                        </p>

                        <p className="text-muted text-sm">
                            I like music and digital art as well, check out my playlists at{' '}
                            <a
                                href="https://tidal.com/@piioni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-lavender font-medium hover:underline"
                            >
                                Tidal profile
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </Bubble>
        </section>
    );
}
