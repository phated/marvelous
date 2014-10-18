'use strict';

var _ = require('lodash');
var get = require('getobject').get;

function reach(parts, obj){
  var result = get(obj, parts);
  return _.isFunction(result) ? result.call(obj) : result;
}

module.exports = reach;
