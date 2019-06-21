'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2019
  },

  rules: {
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] }]
  }
};
