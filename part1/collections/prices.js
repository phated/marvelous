'use strict';

var Collection = require('./collection');

var Price = require('../models/price');

var Prices = Collection.extend({
  model: Price
});

module.exports = Prices;
