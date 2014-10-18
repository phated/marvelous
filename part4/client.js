'use strict';

var React = require('react');
var ready = require('domready');

var routes = require('./templates/routes');

ready(function(){
  React.renderComponent(routes, document.body);
});
