'use strict';

module.exports = {
  extends: 'eslint:recommended',

  env: {
    es2021: true,
    'shared-node-browser': true,
  },

  parserOptions: {
    ecmaVersion: 2022,
  },

  plugins: [
    'import',
    'jsdoc',
    // 'promise',
    'security',
  ],

  settings: {
    'import/ignore': [
      '\\.css$',
    ],

    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        extends: 'extends',
        prop: 'prop',
        property: 'property',
        return: 'returns',
      },
    },
  },

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
    'no-unused-expressions': ['warn', { enforceForJSX: true }],
    'no-unreachable-loop': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
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
    strict: 'warn',
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['warn', 'outside'],

    // These rules loosely enforce some basic style. I try not to be too
    // prescriptive here, but these are things I care about because they help
    // reduce mistakes, improve consistency, and reduce the noisiness of diffs.
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': 'warn',
    'func-call-spacing': 'warn',
    'func-name-matching': 'warn',
    'func-names': ['warn', 'as-needed'],
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    'linebreak-style': ['error', 'unix'],
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    semi: ['warn', 'always'],
    'semi-style': ['warn', 'last'],
    'sort-imports': ['warn', {
      allowSeparatedGroups: true,
      ignoreCase: true,
      ignoreDeclarationSort: true, // handled by `eslint-plugin-import`
    }],

    // These rules apply to both CommonJS and ES modules.
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'warn',
    'import/no-import-module-exports': 'warn',
    'import/no-unresolved': ['warn', {
      caseSensitiveStrict: true,
      commonjs: true,
    }],
    'import/no-webpack-loader-syntax': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],
    'import/no-extraneous-dependencies': ['warn', { peerDependencies: true }],
    'import/order': ['warn', {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
        'type',
      ],
      'newlines-between': 'always',
    }],

    // JSDoc rules
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-property-names': 'warn',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': ['warn', {
      definedTags: [
        'jest-environment',
      ],
    }],
    'jsdoc/check-types': 'warn',
    'jsdoc/check-values': 'warn',
    'jsdoc/empty-tags': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/multiline-blocks': 'warn',
    'jsdoc/no-bad-blocks': ['warn', {
      preventAllMultiAsteriskBlocks: true,
    }],
    'jsdoc/no-multi-asterisks': ['warn', {
      allowWhitespace: true,
    }],
    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
    'jsdoc/require-property-name': 'warn',

    // Rules related to promises.
    // 'promise/no-nesting': 'warn',
    // 'promise/no-new-statics': 'error',
    // 'promise/no-return-wrap': 'warn',
    // 'promise/param-names': 'warn',
    // 'promise/prefer-await-to-then': 'warn',
    // 'promise/valid-params': 'error',

    // Security-related rules.
    'security/detect-unsafe-regex': 'warn',
  },
};
