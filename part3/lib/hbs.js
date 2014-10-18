'use strict';

var handlebars = require('handlebars');
// register handlebars helpers
handlebars.registerHelper('stringify', require('../helpers/stringify'));

module.exports = handlebars;
