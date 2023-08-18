export const rules = {
  //
  // Possible Problems (https://eslint.org/docs/latest/rules/#possible-problems)
  //
  'array-callback-return': [
    'error',
    {
      checkForEach: true,
    },
  ],
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'warn',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  // TODO
  'no-constant-binary-expression': 'warn',
  'no-constant-condition': 'error',
  'no-constructor-return': 'error',
  // TODO
  'no-control-regex': 'warn',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  // stylistic
  'no-irregular-whitespace': 'off',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  // see no-new-native-nonconstructor
  'no-new-symbol': 'off',
  'no-obj-calls': 'error',
  'no-promise-executor-return': 'error',
  // double check
  'no-prototype-builtins': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-setter-return': 'error',
  // check with destructuring
  'no-sparse-arrays': 'error',
  // this is nice to have i guess
  'no-template-curly-in-string': 'warn',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  // stylistic
  'no-unexpected-multiline': 'off',
  // double check
  'no-unmodified-loop-condition': 'warn',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  // check with prettier
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': 'error',
  'no-use-before-define': ['error', 'nofunc'],
  // TODO
  'no-useless-backreference': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  //
  // Suggestions (https://eslint.org/docs/latest/rules/#suggestions)
  //
  'accessor-pairs': 'off',
  // stylistic
  'arrow-body-style': 'off',
  // no-var
  'block-scoped-var': 'off',
  // too many false positives
  camelcase: 'off',
  // who cares?
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  // maybe later
  complexity: 'off',
  // test this first
  'consistent-return': 'off',
  // maybe
  'consistent-this': 'off',
  // nah
  curly: 'off',
  // disable for ts maybe but in js we don't have exhaustive checks
  'default-case': 'error',
  // that would be weird
  'default-case-last': 'error',
  // maybe warn I need to think about this
  'default-param-last': 'off',
  // might clash with that one ts option
  'dot-notation': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'error',
  // TODO
  'func-names': 'off',
  // TODO
  'func-style': 'off',
  'grouped-accessor-pairs': 'off',
  'guard-for-in': 'off',
  // TODO add some more?
  'id-denylist': ['error', 'e', 'err', 'cb', 'data'],
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'error',
  // TODO browser support?
  'logical-assignment-operators': 'error',
  'max-classes-per-file': 'off',
  // TODO maybe
  'max-depth': 'off',
  'max-lines': 'off',
  // TODO maybe
  'max-lines-per-function': 'off',
  // TODO maybe
  'max-nested-callbacks': 'off',
  // TODO maybe
  'max-params': 'off',
  'max-statements': 'off',
  // TODO maybe
  'multiline-comment-style': 'off',
  'new-cap': 'error',
  // TODO only in browser environments?
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-confusing-arrow': 'off',
  // TODO maybe if we have a logger (or opt out? idk yet)
  'no-console': 'off',
  'no-continue': 'off',
  // no-var
  'no-delete-var': 'off',
  'no-div-regex': 'off',
  'no-else-return': 'off',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-function': 'error',
  'no-empty-static-block': 'error',
  // see eqeqeq
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'off',
  // TODO maybe
  'no-extra-boolean-cast': 'off',
  // see no-labels
  'no-extra-label': 'off',
  // stylistic
  'no-extra-semi': 'off',
  // stylystic
  'no-floating-decimal': 'off',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  // not defined 'no-implicit-eval': 'error',
  // stylystic
  'no-inline-comments': 'off',
  // TODO check for false positives
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  // see no-labels
  'no-label-var': 'off',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  // maybe (can be readable sometimes)
  'no-lonely-if': 'off',
  'no-loop-func': 'error',
  // maybe later
  'no-magic-numbers': 'off',
  'no-mixed-operators': 'error',
  'no-multi-assign': 'off',
  'no-multi-str': 'off',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-plusplus': 'off',
  'no-proto': 'error',
  // see no-var
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': 'off',
  // TODO maybe
  'no-restricted-globals': 'off',
  'no-restricted-imports': 'off',
  'no-restricted-properties': 'off',
  // maybe (I'm lazy)
  'no-restricted-syntax': 'off',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  // not defined 'no-sequence': 'error',
  'no-shadow': 'off',
  'no-shadow-restricted-names': 'error',
  'no-ternary': 'off',
  'no-throw-literal': 'error',
  'no-undef-init': 'off',
  'no-undefined': 'off',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'off',
  // see no-labels
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  // check with prettier
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  // TODO: we need this for promises
  'no-void': 'off',
  'no-warning-comments': 'off',
  'no-with': 'error',
  // maybe later
  'object-shorthand': 'off',
  'one-var': 'off',
  'one-var-declaration-per-line': 'off',
  'operator-assignment': 'error',
  'prefer-arrow-callback': [
    'error',
    {
      // needed for React's forwardRef
      allowNamedFunctions: true,
      // too many false positives otherwise
      allowUnboundThis: true,
    },
  ],
  'prefer-const': 'error',
  // maybe
  'prefer-destructuring': 'off',
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-numeric-literals': 'off',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'off',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  // stylistic
  'quote-props': 'off',
  // maybe
  radix: 'off',
  'require-await': 'off',
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  // stylistic
  'sort-imports': 'off',
  // stylistic
  'sort-keys': 'off',
  // stylistic
  'sort-vars': 'off',
  // stylistic
  'spaced-comment': 'off',
  // handled by build tool
  strict: 'off',
  'symbol-description': 'error',
  // see no-var
  'vars-on-top': 'off',
  yoda: 'off',
};

export default {
  files: ['*.js', '*.cjs', '*.mjs', '*.jsx', '*.ts', '*.cts', '*.mts', '*.tsx'],
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  rules,
};
