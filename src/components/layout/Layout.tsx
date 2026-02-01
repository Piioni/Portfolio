import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

/**
 * Layout component wraps all pages with common structure
 * Includes fixed background grid, Navbar, and Footer
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
            {/* Fixed background grid pattern */}
            <div className="background-pattern" aria-hidden="true" />

            <Navbar />

            <main className="grow pt-20 pb-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
