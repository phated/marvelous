'use strict';

var Collection = require('ampersand-collection');

var Comic = require('../models/comic');

var Comics = Collection.extend({
  model: Comic
});

module.exports = Comics;
