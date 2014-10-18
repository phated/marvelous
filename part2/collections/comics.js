'use strict';

var Collection = require('./collection');

var Comic = require('../models/comic');

var Comics = Collection.extend({
  model: Comic
});

module.exports = Comics;
