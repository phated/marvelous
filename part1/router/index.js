'use strict';

var Router = require('ampersand-router');

var HomeView = require('../views/home');
var EventInfo = require('../models/event-info');
var EventInfoView = require('../views/event-info');

var info = new EventInfo();

var home = new HomeView({
  el: document.querySelector('#main')
});

var eventInfo = new EventInfoView({
  el: document.querySelector('#main'),
  model: info
});

var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'events/:id': 'event'
  },

  home: function(){
    // TODO: wire up navbar
    home.render();
  },

  event: function(id){
    info.fetch(id);
  }
});

var router = new AppRouter();

router.history.start({
  pushState: true
});

module.exports = router;
