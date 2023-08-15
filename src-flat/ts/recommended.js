import typeScriptParser from '@typescript-eslint/parser';

import {rules as jsRules} from '../js/recommended.js';

const rulesCoveredByTypeScript = {
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-new-native-nonconstructor': 'off',
    'no-obj-calls': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-unused-private-class-members': 'off',
    'no-unused-vars': 'off',
    'valid-typeof': 'off',
    'no-global-assign': 'off',
}

const rules = {
  ...jsRules,
  ...rulesCoveredByTypeScript
}

export default {
  files: ["**/*.ts", "**/*.tsx", "**/*.d.ts", "**/*.cts", "**/*.mts"],
  languageOptions: {
    parser: typeScriptParser,
  },
  rules
}
