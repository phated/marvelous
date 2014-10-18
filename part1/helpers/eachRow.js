'use strict';

var _ = require('lodash');

function eachRow(collection, rowLength, options){
  return collection.reduce(function(result, item, idx){
    if(idx % rowLength === 0){
      if(idx === 0){
        return (result + '<div class="row">' + options.fn(item));
      } else {
        return (result + '</div><div class="row">' + options.fn(item));
      }
    }

    return result + options.fn(item);
  }, '');
}

module.exports = eachRow;
