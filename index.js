'use strict';

module.exports = {
  extends: 'eslint:recommended',

  env: {
    es6: true,
    'shared-node-browser': true
  },

  parserOptions: {
    ecmaVersion: 2020
  },

  plugins: [
    'import',
    'promise',
    'security'
  ],

  rules: {
    // These rules help catch errors or possible mistakes. Warnings can be
    // overridden as necessary if you're smarter than the linter. Override
    // errors at your own peril.
    'array-callback-return': 'warn',
    curly: [ 'warn', 'all' ],
    'default-param-last': 'warn',
    eqeqeq: 'warn',
    'guard-for-in': 'warn',
    'no-alert': 'warn',
    'no-array-constructor': 'warn',
    'no-buffer-constructor': 'warn',
    'no-caller': 'error',
    'no-constructor-return': 'warn',
    'no-dupe-else-if': 'warn',
    'no-else-return': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'error',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-floating-decimal': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'error',
    'no-label-var': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-loss-of-precision': 'warn',
    'no-new-func': 'error',
    'no-new-object': 'warn',
    'no-new-require': 'warn',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-promise-executor-return': 'warn',
    'no-proto': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-setter-return': 'warn',
    'no-shadow': 'warn',
    'no-throw-literal': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-undef-init': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-expressions': 'warn',
    'no-unreachable-loop': 'warn',
    'no-use-before-define': [ 'error', 'nofunc' ],
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'warn',
    radix: [ 'warn', 'always' ],
    'require-await': 'warn',
    strict: 'warn',
    'unicode-bom': [ 'error', 'never' ],
    'wrap-iife': [ 'warn', 'outside' ],

    // These rules loosely enforce some basic style. I try not to be too
    // prescriptive here, but these are things I care about because they help
    // reduce mistakes, improve consistency, and reduce the noisiness of diffs.
    'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
    'eol-last': 'warn',
    'func-call-spacing': 'warn',
    'func-name-matching': 'warn',
    'func-names': [ 'warn', 'as-needed' ],
    'grouped-accessor-pairs': [ 'warn', 'getBeforeSet' ],
    'linebreak-style': [ 'error', 'unix' ],
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    semi: [ 'warn', 'always' ],
    'semi-style': [ 'warn', 'last' ],

    // These rules apply to both CommonJS and ES modules.
    'import/no-absolute-path': 'warn',
    'import/no-unresolved': [ 'warn', { commonjs: true } ],
    'import/no-webpack-loader-syntax': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': [ 'warn', { noUselessIndex: true } ],
    'import/no-extraneous-dependencies': [ 'warn', { peerDependencies: true } ],

    // Rules related to promises.
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'promise/valid-params': 'error',

    // Security-related rules.
    'security/detect-unsafe-regex': 'warn'
  }
};
