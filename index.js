'use strict';

var markdown = require('markdown').markdown;

exports.name = 'markdown';
exports.inputFormats = ['md', 'markdown'];
exports.outputFormat = 'html';
exports.render = function (str, options, local) {
  return markdown.toHTML(str, options);
};
