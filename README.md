# @titanom/eslint-config

Default [ESLint](https://eslint.org/) config for projects at [Titanom Technologies](https://titanom.com/)

This configuration requires the use of [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) added in [`eslint@8.23.0`](https://www.npmjs.com/package/eslint/v/8.23.0).

## Installation

```sh
pnpm add -D @titanom/eslint-config
```

## Usage

This package exports multiple reusable configurations:
- `base`
- `typescript`
- `react`
- `next`

You can (and should) use multiple of these simultaneously, depending on what tech your project uses.

Example for a Next.js application written in TypeScript:
```js
const base = require('@titanom/eslint-config/base');
const typescript = require('@titanom/eslint-config/typescript');
const react = require('@titanom/eslint-config/react');
const next = require('@titanom/eslint-config/next');

module.exports = [
    base,
    typescript,
    {
        // each config is just a POJO, so you can overwrite or change the config however you like
        ...react,
        files: ['.tsx'],
    },
    next,
];
```
