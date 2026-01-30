import { Container } from '@/components/ui';

/**
 * Blog page - placeholder for blog posts
 * Lazy loaded for performance
 */
export default function Blog() {
    return (
        <Container>
            <section className="py-8">
                <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-8">Blog</h1>

                <div className="text-center py-16">
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark">Blog posts coming soon...</p>
                </div>
            </section>
        </Container>
    );
}
