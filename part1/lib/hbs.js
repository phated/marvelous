'use strict';

var handlebars = require('handlebars');
// register handlebars helpers
handlebars.registerHelper('eachRow', require('../helpers/eachRow'));
handlebars.registerHelper('stringify', require('../helpers/stringify'));
// register handlebars partials
handlebars.registerPartial('home', require('../build/templates/home'));
handlebars.registerPartial('navbar', require('../build/templates/navbar'));
handlebars.registerPartial('listItem', require('../build/templates/list-item'));
handlebars.registerPartial('eventInfo', require('../build/templates/event-info'));
handlebars.registerPartial('pagination', require('../build/templates/pagination'));
handlebars.registerPartial('comicThumbnail', require('../build/templates/comic-thumbnail'));

module.exports = handlebars;
