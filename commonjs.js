'use strict';

module.exports = {
  env: {
    commonjs: true
  },

  parserOptions: {
    sourceType: 'script'
  },

  plugins: [
    'import'
  ],

  rules: {
    'import/no-dynamic-require': 'warn',
  }
};
