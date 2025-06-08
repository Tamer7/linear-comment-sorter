import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/', 'dist/', '*.min.js', 'webpack.config.js'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        chrome: 'readonly',
        MutationObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-empty': 'warn',
    },
  },
];
