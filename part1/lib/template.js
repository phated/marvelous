'use strict';

var path = require('path');

var _ = require('lodash');
var cons = require('consolidate');
var nodefn = require('when/node');

var eachRow = require('../helpers/eachRow');
var dateRange = require('../helpers/dateRange');
var priceType = require('../helpers/priceType');
var stringify = require('../helpers/stringify');
var hasPurchaseUrl = require('../helpers/hasPurchaseUrl');

function template(filename, context){
  var filepath = path.join(__dirname, '..', filename);

  var extras = {
    partials: {
      home: './partials/home',
      eventInfo: './partials/event-info',
      navbar: './partials/navbar',
      listItem: './partials/listItem',
      pagination: './partials/pagination',
      comicThumbnail: './partials/comicThumbnail'
    },
    helpers: {
      eachRow: eachRow,
      dateRange: dateRange,
      priceType: priceType,
      stringify: stringify,
      hasPurchaseUrl: hasPurchaseUrl
    }
  };

  return nodefn.call(cons.handlebars, filepath, _.assign(extras, context));
}

module.exports = template;
