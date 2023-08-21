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
  '@typescript-eslint/consistent-generic-constructors': ['error', 'consturctor'],
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
    'true',
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
  '@typescript-eslint/no-unused-declaration-merging': 'error',
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

  // Extension Rules
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'default-param-last': 'off',
  'dot-notation': 'off',
  'func-call-spacing': 'off',
  indent: 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-implied-eval': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'object-curly-spacing': 'off',
  'padding-line-between-statements': 'off',
  quotes: 'off',
  'require-await': 'off',
  semi: 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'warn',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/init-declarations': 'error',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/lines-between-class-members': ['warn', 'always'],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-shadow': 'warn',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/padding-line-between-statements': 'off',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/return-await': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
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
] as const;

const extensionRules = extensionRulesArr.reduce(
  (rules, rule) => ({
    ...rules,
    [`@typescript-eslint/${rule}`]: baseRules[rule],
  }),
  {},
);

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
