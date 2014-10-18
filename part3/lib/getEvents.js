'use strict';

var apiRequest = require('./apiRequest');

function getEvents(){
  var opts = {
    path: 'http://gateway.marvel.com/v1/public/events',
    params: {
      limit: 100
    }
  };

  return apiRequest(opts).entity();
}

module.exports = getEvents;
