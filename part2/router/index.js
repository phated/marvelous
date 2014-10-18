'use strict';

var React = require('react');
var Router = require('ampersand-router');

var Index = React.createFactory(require('../templates/index'));
var HomeView = React.createFactory(require('../templates/partials/home'));
var EventInfoView = React.createFactory(require('../templates/partials/event-info'));

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
    React.render(Index({
      activePage: HomeView(),
      eventList: events,
      pages: window.data.pages,
      router: router
    }), document.body);
  },

  event: function(id){
    info.fetch(id);

    // TODO: move to mixin
    info.on('change', function(){
      React.render(Index({
        activePage: EventInfoView(info),
        eventList: events,
        pages: window.data.pages,
        router: router
      }), document.body);
    });
  }
});

var router = new AppRouter();

module.exports = router;
