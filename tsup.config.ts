import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: 'terser',
  sourcemap: false,
  splitting: false,
  outDir: 'out',
  clean: true,
  dts: true
});
