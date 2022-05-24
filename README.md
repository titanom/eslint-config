# @titanom/eslint-config

Default [ESLint](https://eslint.org/) config for projects at [Titanom Technologies](https://titanom.com/)

## Installation

```sh
# npm
npm i -D @titanom/eslint-config

# yarn
yarn add -D @titanom/eslint-config

# pnpm
pnpm add -D @titanom/eslint-config
```

## Usage

This package's default export includes rules for javascript in browser environments.  
There are also exports for `react`, `typescript`, `node` and a `strict` version of each.

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    '@titanom/eslint-config',
    '@titanom/eslint-config/typescript', // optional
    '@titanom/eslint-config/react', // optional
    '@titanom/eslint-config/node', // optional
  ],
  // if using typscript
  parserOptions: {
    project: ['./tsconfig.json']
  }
}
```

> If you prefer to use the `strict` ruleset, append the extension with `/strict`.  
> E.g.: `@titanom/eslint-config/typescript/strict`  
> **strict rules extend their base but do not add any additional checks until version 1.0!**
