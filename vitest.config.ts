import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@nimbus-cloud/sdk-core': path.resolve(__dirname, 'packages/core/src')
    }
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    globals: true,
    clearMocks: true,
    testTimeout: 10000,
    coverage: {
      reporter: ['text-summary']
    }
  }
});
