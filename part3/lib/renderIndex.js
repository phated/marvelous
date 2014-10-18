'use strict';

var React = require('react');

var Index = require('../templates/index');

var template = require('./template');

function renderIndex(context){
  return template('./templates/index.hbs', {
    body: React.renderComponentToString(Index(context)),
    state: context
  });
}

module.exports = renderIndex;
