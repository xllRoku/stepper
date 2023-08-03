/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ fastRefresh: false })],
	resolve: {
		alias: {
			'@shared': path.resolve(__dirname, './src/shared'),
			'@auth': path.resolve(__dirname, './src/apps/auth'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@annuality': path.resolve(__dirname, './src/apps/annuality')
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		// you might want to disable it, if you don't have tests that rely on CSS
		// since parsing CSS is slow
		css: true
	}
});
