const ERROR = 2;
const WARN = 1;
const OFF = 0;

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

module.exports = {
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: ['plugin:react/jsx-runtime'],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          pragma: 'React',
          fragment: 'Fragment',
          version: 'detect',
        },
      },
      rules: {
        // Prop Type
        'react/default-props-match-prop-types': OFF,
        'react/forbid-foreign-prop-types': OFF,
        'react/forbid-prop-types': OFF,
        'react/no-unused-prop-types': OFF,
        'react/prefer-exact-props': OFF,
        'react/prefer-read-only-props': OFF,
        'react/prop-types': OFF,
        'react/require-default-props': OFF,
        'react/sort-prop-types': OFF,

        // Class Components
        'react/no-access-state-in-setstate': OFF,
        'react/no-arrow-function-lifecycle': OFF,
        'react/no-did-mount-set-state': OFF,
        'react/no-did-update-set-state': OFF,
        'react/no-direct-mutation-state': OFF,
        'react/no-is-mounted': OFF,
        'react/no-redundant-should-component-update': OFF,
        'react/no-set-state': OFF,
        'react/no-unsafe': OFF,
        'react/no-unused-class-component-methods': OFF,
        'react/no-unused-state': OFF,
        'react/no-will-update-set-state': OFF,
        'react/prefer-es6-class': OFF,
        'react/require-optimization': OFF,
        'react/require-render-return': OFF,
        'react/sort-comp': OFF,
        'react/state-in-constructor': OFF,
        'react/static-property-placement': OFF,

        // React
        'react/boolean-prop-naming': ERROR,
        'react/button-has-type': OFF,
        'react/destructuring-assignment': [ERROR, 'always'],
        'react/display-name': ERROR,
        'react/forbid-dom-props': [ERROR, { forbid: ['dangerouslySetInnerHTML'] }],
        'react/forbid-elements': [ERROR, { forbid: FORBIDDEN_ELEMENTS }],
        'react/function-component-definition': [
          WARN,
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
        // fix error
        'react/hook-use-state': OFF,
        // fix error
        'react/iframe-missing-sandbox': OFF,
        'react/no-adjacent-inline-elements': WARN,
        'react/no-array-index-key': WARN,
        'react/no-children-prop': WARN,
        'react/no-danger': ERROR,
        'react/no-danger-with-children': ERROR,
        'react/no-deprecated': ERROR,
        'react/no-find-dom-node': ERROR,
        'react/no-invalid-html-attribute': ERROR,
        'react/no-multi-comp': ERROR,
        'react/no-namespace': ERROR,
        'react/no-render-return-value': ERROR,
        'react/no-string-refs': ERROR,
        'react/no-this-in-sfc': ERROR,
        'react/no-typos': WARN,
        'react/no-unescaped-entities': ERROR,
        'react/no-unknown-property': ERROR,
        'react/no-unstable-nested-components': ERROR,
        'react/prefer-stateless-function': ERROR,
        'react/react-in-jsx-scope': OFF,
        'react/self-closing-comp': [ERROR, { component: true, html: true }],
        'react/style-prop-object': ERROR,
        'react/void-dom-elements-no-children': ERROR,

        // JSX
        'react/jsx-boolean-value': [WARN, 'never'],
        'react/jsx-child-element-spacing': WARN,
        'react/jsx-closing-bracket-location': WARN,
        'react/jsx-closing-tag-location': WARN,
        'react/jsx-curly-brace-presence': ERROR,
        'react/jsx-curly-newline': [WARN, 'consistent'],
        'react/jsx-curly-spacing': [WARN, { when: 'never' }],
        'react/jsx-equals-spacing': [WARN, 'never'],
        'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-first-prop-new-line': [WARN, 'multiline'],
        'react/jsx-fragments': [ERROR, 'element'],
        'react/jsx-handler-names': [
          OFF,
          
        ],
        'react/jsx-indent': [WARN, 2, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-indent-props': [WARN, 2],
        'react/jsx-key': ERROR,
        'react/jsx-max-depth': OFF,
        'react/jsx-max-props-per-line': [ERROR, { maximum: 15, when: 'always' }],
        'react/jsx-newline': OFF,
        'react/jsx-no-bind': OFF,
        'react/jsx-no-comment-textnodes': ERROR,
        'react/jsx-no-constructed-context-values': ERROR,
        'react/jsx-no-duplicate-props': ERROR,
        'react/jsx-no-literals': OFF,
        'react/jsx-no-script-url': ERROR,
        'react/jsx-no-target-blank': ERROR,
        'react/jsx-no-undef': ERROR,
        'react/jsx-no-useless-fragment': [ERROR, {allowExpressions: true}],
        'react/jsx-one-expression-per-line': OFF,
        'react/jsx-pascal-case': ERROR,
        'react/jsx-props-no-multi-spaces': WARN,
        'react/jsx-props-no-spreading': OFF,
        'react/jsx-sort-default-props': OFF,
        'react/jsx-sort-props': OFF,
        'react/jsx-tag-spacing': [
          WARN,
          {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
          },
        ],
        'react/jsx-uses-react': OFF,
        'react/jsx-uses-vars': ERROR,
        'react/jsx-wrap-multilines': [
          WARN,
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
        'react-hooks/rules-of-hooks': ERROR,
        'react-hooks/exhaustive-deps': WARN,

        // JSX Accessilbility
        'jsx-a11y/alt-text': ERROR,
        'jsx-a11y/anchor-has-content': ERROR,
        'jsx-a11y/anchor-is-valid': ERROR,
        'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
        'jsx-a11y/aria-props': ERROR,
        'jsx-a11y/aria-proptypes': ERROR,
        'jsx-a11y/aria-role': ERROR,
        'jsx-a11y/aria-unsupported-elements': ERROR,
        'jsx-a11y/autocomplete-valid': ERROR,
        'jsx-a11y/click-events-have-key-events': ERROR,
        'jsx-a11y/heading-has-content': ERROR,
        'jsx-a11y/html-has-lang': ERROR,
        'jsx-a11y/iframe-has-title': ERROR,
        'jsx-a11y/img-redundant-alt': ERROR,
        'jsx-a11y/interactive-supports-focus': ERROR,
        'jsx-a11y/label-has-associated-control': ERROR,
        'jsx-a11y/media-has-caption': ERROR,
        'jsx-a11y/mouse-events-have-key-events': ERROR,
        'jsx-a11y/no-access-key': ERROR,
        'jsx-a11y/no-autofocus': ERROR,
        'jsx-a11y/no-distracting-elements': ERROR,
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
          ERROR,
          {
            tr: ['none', 'presentation'],
          },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
          ERROR,
          {
            handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
          },
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          ERROR,
          {
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            table: ['grid'],
            td: ['gridcell'],
          },
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
          ERROR,
          {
            tags: [],
            roles: ['tabpanel'],
          },
        ],
        'jsx-a11y/no-onchange': ERROR,
        'jsx-a11y/no-redundant-roles': ERROR,
        'jsx-a11y/no-static-element-interactions': [
          ERROR,
          {
            handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
          },
        ],
        'jsx-a11y/role-has-required-aria-props': ERROR,
        'jsx-a11y/role-supports-aria-props': ERROR,
        'jsx-a11y/scope': ERROR,
        'jsx-a11y/tabindex-no-positive': ERROR,
      },
    },
  ],
};
