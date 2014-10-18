'use strict';

var React = require('react');
var Router = require('ampersand-router');

var Index = require('../templates/index');
var HomeView = require('../templates/partials/home');
var EventInfoView = require('../templates/partials/event-info');

var Events = require('../collections/events');
var EventInfo = require('../models/event-info');

var events = new Events(window.data.eventList);
var info = new EventInfo();

var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'events/:id': 'event'
  },

  home: function(){
    React.renderComponent(Index({
      activePage: HomeView(),
      eventList: events,
      router: router
    }), document.body);
  },

  event: function(id){
    info.fetch(id);

    // TODO: move to mixin
    info.on('change', function(){
      React.renderComponent(Index({
        activePage: EventInfoView(info),
        eventList: events,
        router: router
      }), document.body);
    });
  }
});

var router = new AppRouter();

module.exports = router;
