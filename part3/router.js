'use strict';

var React = require('react');

var HomeView = require('./templates/partials/home');
var EventInfoView = require('./templates/partials/event-info');

var EventInfo = require('./models/event-info');

var info = new EventInfo();

var Router = require('./router/index');

function home(){
  this.activePage = HomeView();
}

function event(params){
  var self = this;

  var result = info.fetch(params.id);

  return result.then(function(){
    self.activePage = EventInfoView(info);
  });
}

function createRouter(){
  var router = new Router({
    '/': home,
    '/events/:id': event
  });

  return router;
}

module.exports = createRouter;
