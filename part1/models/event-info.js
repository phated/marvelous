'use strict';

var rest = require('rest');
var mime = require('rest/interceptor/mime');
var State = require('ampersand-state');

var Event = require('./event');

var client = rest
  .wrap(mime, { mime: 'application/json' });

var EventInfo = State.extend({
  props: {
    comics: 'array'
  },

  children: {
    event: Event
  },

  fetch: function(id){
    var self = this;

    var opts = {
      path: '/events/{id}.json',
      params: {
        id: id
      }
    };

    client(opts).entity()
      .then(function(entity){
        console.log(entity);
        self.set(entity);
      })
      .catch(function(err){
        console.log(err);
      });
  }
});

module.exports = EventInfo;
