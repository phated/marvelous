'use strict';

var SubCollection = require('ampersand-subcollection');

var handlebars = require('handlebars');
// register handlebars helpers
handlebars.registerHelper('eachRow', require('./helpers/eachRow'));
handlebars.registerHelper('dateRange', require('./helpers/dateRange'));
handlebars.registerHelper('priceType', require('./helpers/priceType'));
handlebars.registerHelper('stringify', require('./helpers/stringify'));
handlebars.registerHelper('hasPurchaseUrl', require('./helpers/hasPurchaseUrl'));
// register handlebars partials
handlebars.registerPartial('comicThumbnail', require('./build/templates/comicThumbnail'));

var ListView = require('./views/list');
var PaginationView = require('./views/pagination');

var Events = require('./collections/events');

var events = new Events(window.data.eventList);

var eventsSubcollection = new SubCollection(events, {
  limit: 10,
  offset: 0
});

var pagination = new PaginationView({
  el: document.querySelector('#pagination'),
  collection: eventsSubcollection
});

pagination.render();

var list = new ListView({
  el: document.querySelector('#event-list'),
  collection: eventsSubcollection
});

list.render();
