<img src="https://opentable.github.io/spur/logos/Spur.png?rand=1" width="100%" alt="Spur" />

# eslint-config-spur

Extends eslint-config-airbnb with some basic overrides for the style to be used on the Spur based packages.

[![NPM version](https://badge.fury.io/js/eslint-config-spur.png)](http://badge.fury.io/js/eslint-config-spur)
[![Build Status](https://travis-ci.org/opentable/eslint-config-spur.png?branch=master)](https://travis-ci.org/opentable/eslint-config-spur)

This package provides Spur's .eslintrc as an extensible shared config. We extend [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Usage

We export three ESLint configurations for your usage.

The export lints ES6/2015+. It requires `eslint`.

1. `npm install --save-dev eslint-config-spur eslint`
2. add `"extends": "spur"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Major differences

The main difference between this config and airbnb's is a set of minor adjustments. This will change overtime as we conduct more reviews of our process.

- Console logs are allowed, but warnings are reported.
- Double equals (`==`) is permitted for one special case: `== null`. This allows you to determine equality with `undefined` and/or `null` in one statement.
- Comma dangle is turned off. Some consider this good practice, some don't. We don't.
