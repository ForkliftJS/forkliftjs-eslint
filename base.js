module.exports = {
  extends: [
    'eslint-config-airbnb/legacy',
    'eslint-config-airbnb/rules/es6',
  ].map(require.resolve),
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "rules": {
    "no-var": 1,
    "quotes": [1, "single", "avoid-escape"],
    "comma-dangle": [2, "never"],
    "func-names": 0,
    "space-before-function-paren": 0,
    "no-console": 1,
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 1,
    "babel/object-shorthand": 1,
    "babel/arrow-parens": 1,
    "babel/no-await-in-loop": 1
  },
  "plugins": [
    "babel"
  ]
};
