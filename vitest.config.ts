import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for React testing
    setupFiles: './test/setup.ts', // Path to your setup file
    include: ['test/**/*.{test,spec}.{js,ts,tsx}'], // Only run tests in the `test` directory
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'), // Map '@' to the 'app' directory
    },
  },
});