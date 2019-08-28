'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] }]
  }
};
