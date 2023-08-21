// @ts-expect-error module has no type declarations
import * as typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import { rules as baseRules } from './base';

const BANNED_TYPES = {
  any: 'Use `unknown` instead, as it does not disable all type-checking.',
  String: {
    message: 'Use `string` instead.',
    fixWith: 'string',
  },
  Boolean: {
    message: 'Use `boolean` instead.',
    fixWith: 'boolean',
  },
  Number: {
    message: 'Use `number` instead.',
    fixWith: 'number',
  },
  Symbol: {
    message: 'Use `symbol` instead.',
    fixWith: 'symbol',
  },
  Function: {
    message: [
      'The `Function` type accepts any function-like value.',
      'It provides no type safety when calling the function, which can be a common source of bugs.',
      'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
      'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
    ].join('\n'),
  },
  Object: {
    message: [
      'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
      '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
      '- If you want a type meaning "any value", you probably want `unknown` instead.',
    ].join('\n'),
  },
  '{}': {
    message: [
      '`{}` actually means "any non-nullish value".',
      '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
      '- If you want a type meaning "any value", you probably want `unknown` instead.',
    ].join('\n'),
  },
};

const extensionRulesArr = [
  'block-spacing',
  'brace-style',
  'class-methods-use-this',
  'comma-dangle',
  'default-param-last',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'key-spacing',
  'keyword-spacing',
  'lines-around-comment',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-empty-function',
  'no-extra-parens',
  'no-extra-semi',
  // rules is unknown
  // "no-implied-eval",
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-redeclare',
  'no-restricted-imports',
  'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'padding-line-between-statements',
  'quotes',
  'require-await',
  // deprecated
  // "return-await",
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops',
] as const;

const extensionRules = extensionRulesArr.reduce<Record<string, any>>(
  (rules, rule) => ({
    ...rules,
    [`@typescript-eslint/${rule}`]: baseRules[rule],
    [rule]: 'off',
  }),
  {},
);

const rulesCoveredByTypeScript = [
  'no-const-assign',
  'no-dupe-args',
  'no-dupe-class-members',
  'no-dupe-keys',
  'no-new-native-nonconstructor',
  'no-obj-calls',
  'no-undef',
  'no-unreachable',
  'no-unsafe-optional-chaining',
  'no-unused-private-class-members',
  'no-unused-vars',
  'valid-typeof',
  'no-global-assign',
].reduce((rulesObj, ruleName) => ({ ...rulesObj, [ruleName]: 'off' }), {});

const rules = {
  ...rulesCoveredByTypeScript,
  ...extensionRules,

  '@typescript-eslint/adjacent-overload-signatures': 'warn',
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  // we don't use tslint
  '@typescript-eslint/ban-tslint-comment': 'off',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: BANNED_TYPES,
    },
  ],
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: true },
  ],
  // we don't use enums
  '@typescript-eslint/no-duplicate-enum-values': 'off',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  // we don't use interfaces
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  // todo no-void: allowAsStatement: true
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true,
    },
  ],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  // we don't use enums
  '@typescript-eslint/no-mixed-enums': 'off',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  // we don't use enums
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  // we don't use interfaces but sometimes they are desired
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  // we don't use enums
  '@typescript-eslint/no-unsafe-enum-comparison': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  // we don't allow var
  '@typescript-eslint/no-var-requires': 'off',
  // we don't allow non-null-assertions
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/prefer-as-const': 'error',
  // we don't use enums
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  // we don't use enums
  '@typescript-eslint/prefer-literal-enum-member': 'off',
  // we don't use namespaces
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  // this behavior is desired but not worth the effort
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'error',
  '@typescript-eslint/sort-type-constituents': 'off',
  '@typescript-eslint/sort-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  '@typescript-eslint/unified-signatures': 'error',
};

export default {
  files: ['**/*.ts', '**/*.tsx', '**/*.d.ts', '**/*.cts', '**/*.mts'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules,
};
