import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';

// Lazy load non-critical pages for better performance
const Projects = lazy(() => import('@/pages/Projects'));
const Blog = lazy(() => import('@/pages/Blog'));

/**
 * Loading fallback component for lazy-loaded pages
 */
function PageLoader() {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-text-muted-light dark:text-text-muted-dark">Loading...</div>
        </div>
    );
}

/**
 * Router configuration with Layout wrapper and lazy-loaded pages
 */
const basename = import.meta.env.PROD ? '/Portfolio' : '/';
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'projects',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Projects />
                        </Suspense>
                    ),
                },
                {
                    path: 'blog',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Blog />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
    { basename }
);

/**
 * App component - Root of the application
 * Provides routing context to all child components
 */
function App() {
    return <RouterProvider router={router} />;
}

export default App;
