'use strict';

var Collection = require('ampersand-collection');

var Price = require('../models/price');

var Prices = Collection.extend({
  model: Price
});

module.exports = Prices;
