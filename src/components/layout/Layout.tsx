import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundGrid } from './BackgroundGrid';
import { cn } from '@/lib/utils';

/**
 * Layout component wraps all pages with common structure
 * Includes Navbar, Footer, and Background elements
 */
export function Layout() {
    return (
        <div
            className={cn(
                'min-h-screen flex flex-col',
                'bg-background-light dark:bg-background-dark',
                'text-text-primary-light dark:text-text-primary-dark',
                'font-mono'
            )}
        >
            {/* Background pattern */}
            <BackgroundGrid />

            {/* Fixed header */}
            <Navbar />

            {/* Main content with top padding for fixed navbar */}
            <main className="grow pt-24 pb-12">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
