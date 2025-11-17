import { defineConfig } from 'eslint/config';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import withDefaultFiles from '../utils/withDefaultFiles';

export default defineConfig(
  withDefaultFiles({
    plugins: { 'simple-import-sort': pluginSimpleImportSort },
    rules: {
      // Enforce consistent type imports to improve bundle size and runtime performance
      // by ensuring type-only imports are properly separated from value imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unassigned-import': [
        'error',
        { allow: ['**/*.css', 'server-only', '@testing-library/jest-dom'] },
      ],
      'import/no-unresolved': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // Node.js builtins prefixed with `node:`.
            ['^node:'],
            // Framework dependencies.
            ['^react$', '^react/', '^next$', '^next/', '^@?\\w'],
            // Absolute imports.
            ['^~'],
            // Mocks.
            ['^~/mocks'],
            // Relative imports.
            ['^\\.'],
          ],
        },
      ],
    },
  }),
);
