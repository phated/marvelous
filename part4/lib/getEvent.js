'use strict';

var apiRequest = require('./apiRequest');

function getEvent(id){
  var opts = {
    path: 'http://gateway.marvel.com/v1/public/events/{id}',
    params: {
      id: id
    }
  };

  return apiRequest(opts).entity();
}

module.exports = getEvent;
