'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  plugins: [
    'import',
  ],

  rules: {
    'import/default': 'warn',
    'import/export': 'warn',
    'import/first': 'warn',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-cycle': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-default': 'warn',
    'no-import-assign': 'error',
  },
};
