module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'vue/comma-dangle': 2,
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ]
};
