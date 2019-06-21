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

To use the primary config, add this to your `.eslintrc.js` (or wherever you've
chosen to configure ESLint):

```js
extends: '@rgrove/eslint-config',
```

You can extend multiple configs using an array:

```js
extends: [
  '@rgrove/eslint-config/browser',
  '@rgrove/eslint-config/react'
],
```

See [the documentation for ESLint's `extends` property](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more details.

## Available Configs

### @rgrove/eslint-config

This is the base config. It defines parser options and rules that are relevant
in all modern JS environments, and doesn't assume the use of any particular
module system.

All the other configs extend this config and build on top of it.

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
