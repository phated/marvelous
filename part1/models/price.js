'use strict';

var State = require('ampersand-state');

var Price = State.extend({
  props: {
    type: 'string',
    price: 'number'
  },

  derived: {
    name: {
      deps: ['type'],
      fn: function(){
        if(this.type === 'printPrice'){
          return 'Print';
        }

        if(this.type === 'digitalPurchasePrice'){
          return 'Digital';
        }

        return 'Unknown';
      }
    }
  }
});

module.exports = Price;
