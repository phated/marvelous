'use strict';

var rest = require('rest');
var mime = require('rest/interceptor/mime');
var State = require('ampersand-state');

var Event = require('./event');

var Comics = require('../collections/comics');

var client = rest
  .wrap(mime, { mime: 'application/json' });

var EventInfo = State.extend({

  collections: {
    comics: Comics
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
        self.comics.reset(entity.comics);
        self.set('event', entity.event);
      })
      .done();
  }
});

module.exports = EventInfo;
