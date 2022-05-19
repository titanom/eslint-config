const { ERROR, WARN, OFF } = require('../constants');

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

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': WARN,
        '@typescript-eslint/array-type': OFF,
        '@typescript-eslint/await-thenable': WARN,
        '@typescript-eslint/ban-ts-comment': OFF,
        '@typescript-eslint/ban-types': [
          ERROR,
          {
            types: BANNED_TYPES,
          },
        ],
        '@typescript-eslint/class-literal-property-style': OFF,
        '@typescript-eslint/consistent-indexed-object-style': [ERROR, 'record'],
        '@typescript-eslint/consistent-type-assertions': [
          ERROR,
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [WARN, 'interface'],
        '@typescript-eslint/consistent-type-exports': [
          WARN,
          { fixMixedExportsWithInlineTypeSpecifier: false },
        ],
        '@typescript-eslint/consistent-type-imports': [WARN, { prefer: 'type-imports' }],
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-member-accessibility': WARN,
        '@typescript-eslint/explicit-module-boundary-types': ERROR,
        '@typescript-eslint/member-delimiter-style': OFF,
        '@typescript-eslint/member-ordering': OFF,
        '@typescript-eslint/method-signature-style': OFF,
        '@typescript-eslint/naming-convention': OFF,
        '@typescript-eslint/no-base-to-string': ERROR,
        '@typescript-eslint/no-confusing-non-null-assertion': WARN,
        '@typescript-eslint/no-confusing-void-expression': [ERROR, { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-dynamic-delete': ERROR,
        '@typescript-eslint/no-empty-interface': [ERROR, { allowSingleExtends: false }],
        '@typescript-eslint/no-explicit-any': ERROR,
        '@typescript-eslint/no-extra-non-null-assertion': WARN,
        '@typescript-eslint/no-extraneous-class': OFF,
        '@typescript-eslint/no-floating-promises': ERROR,
        '@typescript-eslint/no-for-in-array': OFF,
        '@typescript-eslint/no-inferrable-types': WARN,
        '@typescript-eslint/no-invalid-void-type': OFF,
        '@typescript-eslint/no-meaningless-void-operator': ERROR,
        '@typescript-eslint/no-misused-new': ERROR,
        '@typescript-eslint/no-misused-promises': ERROR,
        '@typescript-eslint/no-namespace': ERROR,
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ERROR,
        '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-parameter-properties': OFF,
        '@typescript-eslint/no-require-imports': ERROR,
        '@typescript-eslint/no-this-alias': ERROR,
        '@typescript-eslint/no-type-alias': OFF,
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
        '@typescript-eslint/no-unnecessary-condition': ERROR,
        '@typescript-eslint/no-unnecessary-qualifier': ERROR,
        '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
        '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
        '@typescript-eslint/no-unnecessary-type-constraint': ERROR,
        '@typescript-eslint/no-unsafe-argument': ERROR,
        '@typescript-eslint/no-unsafe-assignment': ERROR,
        '@typescript-eslint/no-unsafe-call': ERROR,
        '@typescript-eslint/no-unsafe-member-access': ERROR,
        '@typescript-eslint/no-unsafe-return': ERROR,
        '@typescript-eslint/no-var-requires': ERROR,
        '@typescript-eslint/non-nullable-type-assertion-style': ERROR,
        '@typescript-eslint/prefer-as-const': ERROR,
        '@typescript-eslint/prefer-enum-initializers': OFF,
        '@typescript-eslint/prefer-for-of': WARN,
        '@typescript-eslint/prefer-function-type': ERROR,
        '@typescript-eslint/prefer-includes': ERROR,
        '@typescript-eslint/prefer-literal-enum-member': WARN,
        '@typescript-eslint/prefer-namespace-keyword': ERROR,
        '@typescript-eslint/prefer-nullish-coalescing': ERROR,
        '@typescript-eslint/prefer-optional-chain': ERROR,
        '@typescript-eslint/prefer-readonly': ERROR,
        '@typescript-eslint/prefer-readonly-parameter-types': OFF,
        '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
        '@typescript-eslint/prefer-regexp-exec': WARN,
        '@typescript-eslint/prefer-return-this-type': WARN,
        '@typescript-eslint/prefer-string-starts-ends-with': ERROR,
        '@typescript-eslint/prefer-ts-expect-error': ERROR,
        '@typescript-eslint/promise-function-async': ERROR,
        '@typescript-eslint/require-array-sort-compare': WARN,
        '@typescript-eslint/restrict-plus-operands': ERROR,
        '@typescript-eslint/restrict-template-expressions': [ERROR, { allownumber: true }],
        '@typescript-eslint/sort-type-union-intersection-members': OFF,
        '@typescript-eslint/strict-boolean-expressions': OFF,
        '@typescript-eslint/switch-exhaustiveness-check': ERROR,
        '@typescript-eslint/triple-slash-reference': OFF,
        '@typescript-eslint/type-annotation-spacing': [
          ERROR,
          {
            before: false,
            after: true,
            overrides: { arrow: { before: true, after: true } },
          },
        ],
        '@typescript-eslint/typedef': OFF,
        '@typescript-eslint/unbound-method': [ERROR, { ignoreStatic: true }],
        '@typescript-eslint/unified-signatures': ERROR,

        // Extension Rules
        'brace-style': OFF,
        'comma-dangle': OFF,
        'comma-spacing': OFF,
        'default-param-last': OFF,
        'dot-notation': OFF,
        'func-call-spacing': OFF,
        indent: OFF,
        'keyword-spacing': OFF,
        'lines-between-class-members': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF,
        'no-duplicate-imports': OFF,
        'no-empty-function': OFF,
        'no-extra-parens': OFF,
        'no-extra-semi': OFF,
        'no-implied-eval': OFF,
        'no-invalid-this': OFF,
        'no-loop-func': OFF,
        'no-loss-of-precision': OFF,
        'no-magic-numbers': OFF,
        'no-redeclare': OFF,
        'no-shadow': OFF,
        'no-throw-literal': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF,
        'no-use-before-define': OFF,
        'no-useless-constructor': OFF,
        'object-curly-spacing': OFF,
        'padding-line-between-statements': OFF,
        quotes: OFF,
        'require-await': OFF,
        semi: OFF,
        'space-before-function-paren': OFF,
        'space-infix-ops': OFF,
        '@typescript-eslint/brace-style': [WARN, '1tbs', { allowSingleLine: true }],
        '@typescript-eslint/comma-dangle': [
          WARN,
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
          },
        ],
        '@typescript-eslint/comma-spacing': [WARN, { before: false, after: true }],
        '@typescript-eslint/default-param-last': ERROR,
        '@typescript-eslint/dot-notation': ERROR,
        '@typescript-eslint/func-call-spacing': [WARN, 'never'],
        '@typescript-eslint/indent': OFF,
        '@typescript-eslint/init-declarations': ERROR,
        '@typescript-eslint/keyword-spacing': [WARN, { before: true, after: true }],
        '@typescript-eslint/lines-between-class-members': [WARN, 'always'],
        '@typescript-eslint/no-array-constructor': ERROR,
        '@typescript-eslint/no-dupe-class-members': ERROR,
        '@typescript-eslint/no-duplicate-imports': ERROR,
        '@typescript-eslint/no-empty-function': ERROR,
        '@typescript-eslint/no-extra-parens': OFF,
        '@typescript-eslint/no-extra-semi': ERROR,
        '@typescript-eslint/no-implied-eval': ERROR,
        '@typescript-eslint/no-invalid-this': ERROR,
        '@typescript-eslint/no-loop-func': ERROR,
        '@typescript-eslint/no-loss-of-precision': ERROR,
        '@typescript-eslint/no-magic-numbers': OFF,
        '@typescript-eslint/no-redeclare': ERROR,
        '@typescript-eslint/no-shadow': WARN,
        '@typescript-eslint/no-throw-literal': ERROR,
        '@typescript-eslint/no-unused-expressions': [
          ERROR,
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': ERROR,
        '@typescript-eslint/no-use-before-define': ERROR,
        '@typescript-eslint/no-useless-constructor': ERROR,
        '@typescript-eslint/object-curly-spacing': [
          WARN,
          'always',
          { arraysInObjects: false, objectsInObjects: false },
        ],
        '@typescript-eslint/padding-line-between-statements': OFF,
        '@typescript-eslint/quotes': [
          WARN,
          'single',
          { allowTemplateLiterals: true, avoidEscape: true },
        ],
        '@typescript-eslint/require-await': ERROR,
        '@typescript-eslint/return-await': OFF,
        '@typescript-eslint/semi': [WARN, 'always', { omitLastInOneLineBlock: false }],
        '@typescript-eslint/space-before-function-paren': [
          WARN,
          { anonymous: 'never', named: 'never', asyncArrow: 'always' },
        ],
        '@typescript-eslint/space-infix-ops': [WARN, { int32Hint: false }],
      },
    },
  ],
};
