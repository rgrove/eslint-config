'use strict';

module.exports = {
  extends: './index.js',

  parserOptions: {
    sourceType: 'module'
  },

  rules: {
    'import/default': 'warn',
    'import/export': 'warn',
    'import/extensions': [ 'warn', 'always', { ignorePackages: true } ],
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
    'import/order': [ 'warn', [[ 'builtin', 'external' ]] ],
  }
};
