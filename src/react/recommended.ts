// @ts-expect-error module has no type declarations
import react from 'eslint-plugin-react';
// @ts-expect-error module has no type declarations
import hooks from 'eslint-plugin-react-hooks';
// @ts-expect-error module has no type declarations
import a11y from 'eslint-plugin-jsx-a11y';

const FORBIDDEN_ELEMENTS = [
  { element: 'basefont', message: 'Use CSS instead.' },
  { element: 'big', message: 'Use CSS instead.' },
  { element: 'blink', message: 'Use CSS instead.' },
  { element: 'center', message: 'Use CSS instead.' },
  { element: 'font', message: 'Use CSS instead.' },
  { element: 'marquee', message: 'Use CSS instead.' },
  { element: 'multicol', message: 'Use CSS instead.' },
  { element: 'nobr', message: 'Use CSS instead.' },
  { element: 'spacer', message: 'Use CSS instead.' },
  { element: 'tt', message: 'Use CSS instead.' },
  { element: 'acronym', message: 'Use <abbr /> instead.' },
  {
    element: 'applet',
    message: 'Use <embed /> or <object /> instead.',
  },
  { element: 'bgsound', message: 'Use <audio /> instead.' },
  { element: 'frame', message: 'Use <iframe /> instead.' },
  { element: 'frameset', message: 'Use <iframe /> instead.' },
  { element: 'noframe', message: 'Use <iframe /> instead.' },
  { element: 'isindex', message: 'Use form controls instead.' },
  { element: 'dir', message: 'Use <ul /> instead.' },
  { element: 'hgroup', message: 'Use <header /> instead.' },
  {
    element: 'listing',
    message: 'Use <pre /> and <code /> instead.',
  },
  { element: 'nextid', message: 'Use GUIDs instead.' },
  { element: 'noembed', message: 'Use <object /> instead.' },
  { element: 'plaintext', message: 'Use `text/plain` MIME type.' },
  { element: 'strike', message: 'Use <del /> or <s /> instead.' },
  {
    element: 'xmp',
    message: 'Use <pre /> or <code /> and escape "<" and "&" instead.',
  },
];

export const rules = {
  // Prop Type
  'react/default-props-match-prop-types': 'off',
  'react/forbid-foreign-prop-types': 'off',
  'react/forbid-prop-types': 'off',
  'react/no-unused-prop-types': 'off',
  'react/prefer-exact-props': 'off',
  'react/prefer-read-only-props': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/sort-prop-types': 'off',

  // Class Components
  'react/no-access-state-in-setstate': 'off',
  'react/no-arrow-function-lifecycle': 'off',
  'react/no-did-mount-set-state': 'off',
  'react/no-did-update-set-state': 'off',
  'react/no-direct-mutation-state': 'off',
  'react/no-is-mounted': 'off',
  'react/no-redundant-should-component-update': 'off',
  'react/no-set-state': 'off',
  'react/no-unsafe': 'off',
  'react/no-unused-class-component-methods': 'off',
  'react/no-unused-state': 'off',
  'react/no-will-update-set-state': 'off',
  'react/prefer-es6-class': 'off',
  'react/require-optimization': 'off',
  'react/require-render-return': 'off',
  'react/sort-comp': 'off',
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',

  // React
  'react/boolean-prop-naming': 'error',
  'react/button-has-type': 'off',
  'react/destructuring-assignment': ['error', 'always'],
  'react/display-name': 'error',
  'react/forbid-dom-props': ['error', { forbid: ['dangerouslySetInnerHTML'] }],
  'react/forbid-elements': ['error', { forbid: FORBIDDEN_ELEMENTS }],
  'react/function-component-definition': [
    'warn',
    {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    },
  ],
  // fix error
  'react/hook-use-state': 'off',
  // fix error
  'react/iframe-missing-sandbox': 'off',
  'react/no-adjacent-inline-elements': 'warn',
  'react/no-array-index-key': 'warn',
  'react/no-children-prop': 'warn',
  'react/no-danger': 'error',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-invalid-html-attribute': 'error',
  'react/no-multi-comp': 'off',
  'react/no-namespace': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'warn',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/prefer-stateless-function': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/self-closing-comp': ['error', { component: true, html: true }],
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',

  // JSX
  'react/jsx-boolean-value': ['warn', 'never'],
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-closing-tag-location': 'warn',
  'react/jsx-curly-brace-presence': 'error',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-first-prop-new-line': ['warn', 'multiline'],
  'react/jsx-fragments': ['error', 'element'],
  'react/jsx-handler-names': ['off'],
  'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': ['warn', 2],
  'react/jsx-key': 'error',
  'react/jsx-max-depth': 'off',
  'react/jsx-max-props-per-line': ['error', { maximum: 15, when: 'always' }],
  'react/jsx-no-bind': 'off',
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-literals': 'off',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-multi-spaces': 'warn',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-default-props': 'off',
  'react/jsx-sort-props': 'off',
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'error',
  'react/jsx-wrap-multilines': [
    'warn',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore',
    },
  ],

  // Rules of Hooks
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',

  // JSX Accessilbility
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': 'error',
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-proptypes': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/autocomplete-valid': 'error',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/iframe-has-title': 'error',
  'jsx-a11y/img-redundant-alt': 'error',
  'jsx-a11y/interactive-supports-focus': 'error',
  'jsx-a11y/label-has-associated-control': 'error',
  'jsx-a11y/media-has-caption': 'error',
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/no-access-key': 'error',
  'jsx-a11y/no-autofocus': 'error',
  'jsx-a11y/no-distracting-elements': 'error',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': [
    'error',
    {
      tr: ['none', 'presentation'],
    },
  ],
  'jsx-a11y/no-noninteractive-element-interactions': [
    'error',
    {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    },
  ],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': [
    'error',
    {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    },
  ],
  'jsx-a11y/no-noninteractive-tabindex': [
    'error',
    {
      tags: [],
      roles: ['tabpanel'],
    },
  ],
  'jsx-a11y/no-onchange': 'error',
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/no-static-element-interactions': [
    'error',
    {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    },
  ],
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/scope': 'error',
  'jsx-a11y/tabindex-no-positive': 'error',
};

export default {
  files: ['*.jsx', '*.tsx'],
  plugins: {
    react,
    'react-hooks': hooks,
    'jsx-a11y': a11y,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules,
};
