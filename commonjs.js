'use strict';

module.exports = {
  extends: './index.js',

  env: {
    commonjs: true
  },

  parserOptions: {
    sourceType: 'script'
  },

  rules: {
    'import/no-dynamic-require': 'warn',
  }
};
