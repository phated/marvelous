'use strict';

var apiRequest = require('./apiRequest');

function getComics(item){
  var opts = {
    path: item.comics.collectionURI
  };

  return apiRequest(opts).entity();
}

module.exports = getComics;
