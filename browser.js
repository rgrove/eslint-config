'use strict';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: 2021,
  },

  plugins: [
    'import',
  ],

  rules: {
    'import/no-dynamic-require': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
