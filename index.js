'use strict'

const {markdown} = require('markdown')

exports.name = 'markdown'
exports.inputFormats = ['md', 'markdown']
exports.outputFormat = 'html'
exports.render = function (str, options) {
  let dialect

  // Find out what dialect to use.
  if (typeof options === 'string' || options instanceof String) {
    dialect = options
  } else if (typeof options === 'object' && options.dialect) {
    {dialect} = options
  }

  return markdown.toHTML(str, dialect)
}
