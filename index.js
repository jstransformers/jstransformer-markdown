'use strict';

var markdown = require('markdown').markdown;

exports.name = 'markdown';
exports.outputFormat = 'html';
exports.render = function (str, dialect) {
  return markdown.toHTML(str, dialect);
};
