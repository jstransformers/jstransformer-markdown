'use strict';

var markdown = require('markdown').markdown;

exports.name = 'markdown';
exports.outputFormat = 'html';
exports.render = function (str, options, local) {
  return markdown.toHTML(str, options);
};
