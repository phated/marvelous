'use strict';

var State = require('ampersand-state');
var moment = require('moment');
require('twix');

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
    imageSmall: {
      deps: ['thumbnail'],
      fn: function(){
        return this.thumbnail.path + '/landscape_small.' + this.thumbnail.extension;
      }
    },
    image: {
      deps: ['thumbnail'],
      fn: function(){
        return this.thumbnail.path + '/detail.' + this.thumbnail.extension;
      }
    },
    dateRange: {
      deps: ['start', 'end'],
      fn: function(){
        return moment.twix(this.start, this.end, { allDay: true }).format();
      }
    },
    link: {
      deps: ['id'],
      fn: function(){
        return '/events/' + this.id;
      }
    }
  }
});

module.exports = Event;
