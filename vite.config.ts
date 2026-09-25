/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // Enables global APIs like 'describe', 'it', 'expect' so you don't have to import them in every file
    globals: true,

    // Simulates a browser environment using jsdom
    environment: 'jsdom',

    // Points to a setup file that runs before your tests start
    setupFiles: './vitest.setup.ts',
    passWithNoTests: true,
  },
});
