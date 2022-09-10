'use strict';

module.exports = {
  overrides: [{
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
    ],

    files: '**/*.{cts,mts,ts,tsx}',
    parser: '@typescript-eslint/parser',

    plugins: [
      '@typescript-eslint',
    ],

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    rules: {
      'prefer-const': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': ['error', {
        functions: false,
        ignoreTypeReferences: true,
        variables: false,
      }],
      '@typescript-eslint/type-annotation-spacing': ['warn'],
    },
  }],
};
