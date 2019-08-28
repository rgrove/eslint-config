'use strict';

module.exports = {
  env: {
    commonjs: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script'
  },

  plugins: [
    'import'
  ],

  rules: {
    'import/no-dynamic-require': 'warn',
  }
};
