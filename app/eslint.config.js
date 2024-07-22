import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import js from '@eslint/js';
import path from 'node:path';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/node_modules', '.babelrc.js'],
  },
  ...compat.extends('prettier'),
  {
    languageOptions: {
      ecmaVersion: 5,
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      sourceType: 'script',
    },
    plugins: {
      prettier,
    },
  },
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended').map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*tsx'],
  })),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*tsx'],
    languageOptions: {
      ecmaVersion: 5,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      sourceType: 'script',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      camelcase: 'error',
      'import/prefer-default-export': 0,
      'jsx-a11y/label-has-associated-control': 'off',
      'no-console': ['warn'],
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': [
        'warn',
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'object-curly-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      'prefer-const': 'error',
      'prefer-destructuring': ['error'],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['multiple', 'single', 'all', 'none'],
        },
      ],
      'sort-keys': 'error',
      'sort-vars': [
        'error',
        {
          ignoreCase: false,
        },
      ],
      'space-before-blocks': 'off',
    },
  },
];
