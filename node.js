'use strict';

module.exports = {
  extends: './index.js',

  env: {
    node: true
  },

  rules: {
    'security/detect-buffer-noassert': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
  }
};
