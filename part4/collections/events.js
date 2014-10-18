'use strict';

var when = require('when');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var Collection = require('ampersand-collection');

var Event = require('../models/event');

var client = rest
  .wrap(mime, { mime: 'application/json' });

var Events = Collection.extend({
  model: Event,

  fetch: function(){
    var collection = this;

    if(collection.length){
      return when.resolve(collection);
    }

    var opts = {
      path: 'http://localhost:1337/events.json'
    };

    return client(opts).entity()
      .then(function(entity){
        console.log('events', entity);
        collection.reset(entity);
        return collection;
      });
  }
});

module.exports = Events;
