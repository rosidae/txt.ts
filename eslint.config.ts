import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    ignores: ['**/node_modules/**', '**/out/**']
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    extends: ['js/recommended'],
    plugins: { js }
  },
  perfectionist.configs['recommended-line-length'],
  tseslint.configs.recommended as Linter.Config
]);
