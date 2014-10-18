'use strict';

var Router = require('ampersand-router');

var HomeView = require('../views/home');
var EventInfo = require('../models/event-info');
var EventInfoView = require('../views/event-info');

var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'events/:id': 'event'
  },

  home: function(){
    var home = new HomeView({
      el: document.querySelector('#main')
    });

    home.render();
  },

  event: function(id){
    var info = new EventInfo();

    var eventInfo = new EventInfoView({
      el: document.querySelector('#main'),
      model: info
    });

    info.fetch(id);
  }
});

var router = new AppRouter();

module.exports = router;
