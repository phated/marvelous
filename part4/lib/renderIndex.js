'use strict';

var nodefn = require('when/node');
var Router = require('react-router');

var template = require('./template');

var routes = require('../templates/routes');

function renderIndex(route){
  return nodefn.call(Router.renderRoutesToString, routes, route)
    .spread(function(ar, html, data){
      return template('./templates/index.hbs', {
        body: html,
        state: data
      });
    });
}

module.exports = renderIndex;
