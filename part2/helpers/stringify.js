'use strict';

var _ = require('lodash');

var propsToStrip = ['filename', 'data', 'helpers', 'knownHelpers', 'partials'];

function stringify(obj){
  return JSON.stringify(_.omit(obj, propsToStrip));
}

module.exports = stringify;
