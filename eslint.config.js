import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import checkFile from 'eslint-plugin-check-file'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vitest from 'eslint-plugin-vitest'

export default defineConfig([
  globalIgnores(['dist']),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'check-file': checkFile,
      vitest: vitest,
    },
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // --- Import Sorting ---
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // --- Naming Conventions ---
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.{ts,tsx}': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': [
        'error',
        { 'src/**/!(__tests__)': 'KEBAB_CASE' },
      ],
    },
  },

  // Vitest-specific rules for test files
  {
    files: ['**/*.test.{ts,tsx}'], // Apply only to test files
    ...vitest.configs.recommended,
    rules: {
      // any specific test rule overrides
    },
  },

  eslintPluginPrettierRecommended,
])
