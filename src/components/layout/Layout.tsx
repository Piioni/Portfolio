import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

/**
 * Layout component wraps all pages with common structure
 * Includes Navbar, Footer - Background pattern is handled via CSS on body
 */
export function Layout() {
    return (
        <div
            className={cn(
                'min-h-screen flex flex-col',
                'bg-background-light dark:bg-background-dark',
                'text-primary',
                'font-mono'
            )}
        >
            {/* Fixed header */}
            <Navbar />

            {/* Main content with top padding for fixed navbar */}
            <main className="grow pt-20 pb-8">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
