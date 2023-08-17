// @ts-expect-error module has no type declarations
import nextPlugin from '@next/eslint-plugin-next';
import globals from './globals';

const rules = {
  ...nextPlugin.configs.recommended.rules,
  ...nextPlugin.configs['core-web-vitals'].rules,
};

export default {
  plugins: {
    '@next/next': nextPlugin,
  },
  languageOptions: {
    globals: globals.node as any,
  },
  rules,
};
