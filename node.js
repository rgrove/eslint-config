'use strict';

module.exports = {
  env: {
    node: true
  },

  plugins: [
    'security'
  ],

  rules: {
    'security/detect-buffer-noassert': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
  }
};
