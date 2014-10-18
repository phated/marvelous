'use strict';

var fs = require('fs');
var path = require('path');

var nodefn = require('when/node');

var handlebars = require('./hbs');

function render(context, tmpl){
  return handlebars.compile(tmpl)(context);
}

function template(filename, context){
  var filepath = path.join(__dirname, '..', filename);
  return nodefn.call(fs.readFile, filepath, 'utf8').fold(render, context);
}

module.exports = template;
