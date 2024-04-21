// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { swcPlugin } from 'vite-plugin-swc';

export default defineConfig({
    plugins: [
        reactRefresh(),
        swcPlugin(),
    ],
});
