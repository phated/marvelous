'use strict';

var State = require('ampersand-state');

var Event = State.extend({
  props: {
    id: 'number',
    title: 'string',
    description: 'string',
    thumbnail: 'object',
    start: 'string',
    end: 'string'
  },

  derived: {
    image: {
      deps: ['thumbnail'],
      fn: function(){
        return this.thumbnail.path + '/detail.' + this.thumbnail.extension;
      }
    }
  }
});

module.exports = Event;
