'use strict';

var _ = require('lodash');
var State = require('ampersand-state');

var Prices = require('../collections/prices');

var Comic = State.extend({
  props: {
    title: 'string',
    thumbnail: 'object',
    urls: 'array'
  },

  collections: {
    prices: Prices
  },

  derived: {
    image: {
      deps: ['thumbnail'],
      fn: function(){
        return this.thumbnail.path + '/portrait_uncanny.' + this.thumbnail.extension;
      }
    },
    purchaseUrl: {
      deps: ['urls'],
      fn: function(){
        var purchase = _.find(this.urls, { type: 'purchase' });
        if(purchase){
          return purchase.url;
        }
      }
    }
  }
});

module.exports = Comic;
