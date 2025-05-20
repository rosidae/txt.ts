import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: 'terser',
  sourcemap: true,
  outDir: 'out',
  clean: true,
  dts: true
});
