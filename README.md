# @rgrove/eslint-config

These are my personal ESLint configs. There are many like them, but these ones
are mine.

You're welcome to extend my configs and use them for your own projects, but be
warned: my preferences change from time to time, and these configs will change
with them.

Please don't ask me to change these configs to suit your preferences. Just
override them in your own configs, or don't use them.

## Usage

First, install the npm module:

```bash
npm i --save-dev @rgrove/eslint-config
```

To use the primary config, add an `extends` property to your `.eslintrc.js` (or
wherever you've chosen to configure ESLint), like this:

```js
module.exports = {
  extends: '@rgrove/eslint-config'
};
```

You can extend multiple configs using an array:

```js
module.exports = {
  extends: [
    '@rgrove/eslint-config',
    '@rgrove/eslint-config/browser',
    '@rgrove/eslint-config/modules',
    '@rgrove/eslint-config/react'
  ]
};
```

When extending multiple configs, always extend `@rgrove/eslint-config` first,
since it defines baseline rules that other configs may override.

See [the documentation for ESLint's `extends` property](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more details.

## Available Configs

### @rgrove/eslint-config

This is the base config. It defines parser options and rules that are relevant
in all modern JS environments, and doesn't assume the use of any particular
module system.

When extending multiple configs, this one should always be first.

### @rgrove/eslint-config/browser

Defines parser options and rules specific to modern browser JS.

### @rgrove/eslint-config/commonjs

Defines parser options and rules specific to CommonJS modules.

### @rgrove/eslint-config/modules

Defines parser options and rules specific to ES modules.

### @rgrove/eslint-config/node

Defines parser options and rules specific to modern Node.js.

### @rgrove/eslint-config/react

Defines parser options and rules specific to React.

## Using an alternative parser

These configs use ESLint's default parser. If you're using (for example) Babel
to transpile language features that aren't yet part of the ECMAScript standard,
ESLint may not be able to parse them, and you may see parsing errors when you
run ESLint.

To fix this, you may need to specify an alternative parser such as
[babel-eslint](https://github.com/babel/babel-eslint) in your ESLint config:

```js
module.exports = {
  parser: 'babel-eslint',

  extends: [
    '@rgrove/eslint-config',
    '@rgrove/eslint-config/browser',
    '@rgrove/eslint-config/modules',
    '@rgrove/eslint-config/react'
  ]
};
```

You'll need to install and properly configure babel-eslint (or whatever
alternative parser you use) as a dependency of your own project.
