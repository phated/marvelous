'use strict';

var when = require('when');
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
    var model = this;

    if(model.event && model.event.id === id){
      return when.resolve(model);
    }

    var opts = {
      path: 'http://localhost:1337/events/{id}.json',
      params: {
        id: id
      }
    };

    return client(opts).entity()
      .then(function(entity){
        console.log('info', entity);
        model.comics.reset(entity.comics);
        model.set('event', entity.event);
        return model;
      });
  }
});

module.exports = EventInfo;
