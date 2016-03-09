<a href="https://github.com/forkliftjs"><img width="192" height="192" src="https://github.com/ForkliftJS/docs/raw/master/images/logos/logo.png" alt="ForkliftJS" /></a>

[![Join the chat at https://gitter.im/ForkliftJS/forkliftjs](https://badges.gitter.im/ForkliftJS/forkliftjs.svg)](https://gitter.im/ForkliftJS/forkliftjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![npm version](https://badge.fury.io/js/eslint-config-forkliftjs.svg)](https://badge.fury.io/js/eslint-config-forkliftjs)

# eslint-config-forkliftjs

This package provides a modified version of Airbnb's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-forkliftjs

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-forkliftjs eslint-plugin-react eslint`
2. add `"extends": "forkliftjs"` to your .eslintrc

### eslint-config-forkliftjs/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-forkliftjs eslint`
2. add `"extends": "forkliftjs/base"` to your .eslintrc

### eslint-config-forkliftjs/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-forkliftjs eslint`
2. add `"extends": "forkliftjs/legacy"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Questions?
Feel free to ask questions on our Gitter channel!

## Contributors
<a href="https://github.com/nvanmeurs"><img width="96" height="96" src="https://github.com/ForkliftJS/docs/raw/master/images/contributors/nvanmeurs.png" alt="nvanmeurs" /></a>
