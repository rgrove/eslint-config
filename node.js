'use strict';

module.exports = {
  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2022,
  },

  plugins: [
    'security',
  ],

  rules: {
    'no-console': 'off',
    'security/detect-buffer-noassert': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
  },
};
