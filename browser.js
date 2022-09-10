'use strict';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: 2022,
  },

  plugins: [
    'import',
  ],

  rules: {
    'import/no-dynamic-require': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
