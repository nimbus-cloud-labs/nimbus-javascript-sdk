import { defineConfig } from 'tsup';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const packagesDir = join(__dirname, 'packages');

function discoverPackages(): string[] {
  try {
    return readdirSync(packagesDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    return [];
  }
}

export default defineConfig(() => {
  const packages = discoverPackages();
  if (packages.length === 0) {
    return {
      entry: {},
      clean: true,
    };
  }
  return packages.map((pkg) => ({
    name: pkg,
    entry: [`packages/${pkg}/src/index.ts`],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    minify: false,
    clean: false,
    outDir: `packages/${pkg}/dist`,
    target: 'node20',
    platform: 'neutral',
    shims: false
  }));
});
