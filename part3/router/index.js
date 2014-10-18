'use strict';

var _ = require('lodash');
var React = require('react');
var State = require('ampersand-state');
var Router = require('routes/index');

var AppRouter = State.extend({

  initialize: function(config){
    var router = this._router = new Router();

    this.routes = config;

    _.forEach(this.routes, function(fn, route){
      router.addRoute(route, fn);
    });

    if(global.location && global.location.pathname){
      this.navigate(global.location.pathname);
    }
  },

  props: {
    activePage: 'object',
    activeRoute: 'object',
    routes: 'object'
  },

  navigate: function(route){
    var match = this._router.match(route);

    if(!match){
      console.error(new Error('Route Not Found: ' + route));
      return;
    }

    if(global.history && global.history.pushState){
      global.history.pushState({}, '', route);
    }

    var result = match.fn.call(this, match.params);
    this.set('activeRoute', match); // triggers change
    return result; // allows promise async
  }
});

module.exports = AppRouter;
