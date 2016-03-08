module.exports = {
  extends: [
    'eslint-config-airbnb/rules/best-practices',
    'eslint-config-airbnb/rules/errors',
    'eslint-config-airbnb/rules/legacy',
    'eslint-config-airbnb/rules/node',
    'eslint-config-airbnb/rules/style',
    'eslint-config-airbnb/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {
    'quotes': [1, 'single', 'avoid-escape'],
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-console': 1
  }
};
