'use strict';

var template = require('./template');

function renderIndex(context){
  return template('./templates/index.hbs', context);
}

module.exports = renderIndex;
