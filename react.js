'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,

    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    'react',
    'react-hooks'
  ],

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-redundant-should-component-update': 'warn',
    'react/no-render-return-value': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
