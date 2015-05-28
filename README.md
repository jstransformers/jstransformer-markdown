# jstransformer-markdown

Transform markdown into HTML using markdown

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-markdown/master.svg)](https://travis-ci.org/jstransformers/jstransformer-markdown)
[![Dependency Status](https://img.shields.io/gemnasium/jstransformers/jstransformer-markdown.svg)](https://gemnasium.com/jstransformers/jstransformer-markdown)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-markdown/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-markdown?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-markdown.svg)](https://www.npmjs.org/package/jstransformer-markdown)

## Installation

    npm install jstransformer-markdown

## API

```js
var foo = require('jstransformer')(require('jstransformer-markdown'))

foo.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT