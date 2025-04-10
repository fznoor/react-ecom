/// <reference types="vitest" />
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/config/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json'],
    },
  },
})