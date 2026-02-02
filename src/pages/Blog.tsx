import { Container } from '@/components/ui';

export default function Blog() {
    return (
        <Container>
            <section>
                <h1 className="text-3xl font-bold text-text-primary-light dark:text-accent-lavender-dark mb-8">
                    Blog Posts
                </h1>

                <div className="text-center py-16">
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">Blog posts coming soon...</p>
                </div>
            </section>
        </Container>
    );
}
