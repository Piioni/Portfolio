import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    // Base path para GitHub Pages
    base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
});
