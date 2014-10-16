'use strict';

var Collection = require('ampersand-collection');

var Event = require('../models/event');

var Events = Collection.extend({
  model: Event
});

module.exports = Events;
