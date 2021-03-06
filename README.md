# React-plain - helper functions for creating DOM elements in React without JSX

![npm](https://img.shields.io/npm/v/react-plain)
![CircleCI](https://img.shields.io/circleci/build/github/caderek/react-plain)
![David](https://img.shields.io/david/caderek/react-plain)
![Codecov](https://img.shields.io/codecov/c/github/caderek/react-plain)
![GitHub](https://img.shields.io/github/license/caderek/react-plain)

## Table of contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Quick example](#quick-example)
4. [API](#api)
5. [License](#license)

<a id='overview'></a>

## Overview

This package contains utility functions for creating React HTML elements, without using JSX. It wraps `React.createElement` in dedicated functions for each html tag, so you have shorter syntax and IDE suggestions.

<a id='installation'></a>

## Installation

Using NPM:

```sh
npm i react-plain
```

Using Yarn:

```
yarn add react-plain
```

<a id='quick-example'></a>

## Quick example

```js
/**
 * You can also use default import, for example:
 *   import tags from 'react-plain
 *   import t from 'react-plain'
 */
import { __, a, div, h1, p } from 'react-plain'

const Hello = () => {
  return h1(__, 'Hello React without JSX!')
}

const App = () => {
  return div({ class: 'example' },
    Hello(),
    p(__, 'Simply use html tags as functions!'),
    p(__, 'You can use __ instead of null'),
    p(__,
      'Check out the project repo: ',
      a({ href: '//github.com/caderek/react-plain' }, 'click'),
    ),
  )
}
```

Live example: https://stackblitz.com/edit/react-plain-example

<a id='api'></a>

## API

API is very simple, instead of:

```js
React.createElement('tag', props, ...children)
```

you get:

```js
tag(props, ...children)
```

Additionally, the library exports `__` constant, which is just `null`, to use as a handy alternative for empty props.


<a id="license"></a>

## License

Project is under open, non-restrictive [ISC license](LICENSE).
