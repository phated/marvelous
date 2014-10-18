'use strict';

var ready = require('domready');
var SubCollection = require('ampersand-subcollection');

require('./lib/hbs'); // To register our helpers and partials

var ListView = require('./views/list');
var NavbarView = require('./views/navbar');
var PaginationView = require('./views/pagination');

var Events = require('./collections/events');

var router = require('./router');

var events = new Events(window.data.eventList);

ready(function(){
  var navbar = new NavbarView({
    el: document.querySelector('nav')
  });

  navbar.render();

  var pagination = new PaginationView({
    el: document.querySelector('#pagination'),
    collection: events
  });

  pagination.render();

  var list = new ListView({
    el: document.querySelector('#event-list'),
    collection: events
  });

  list.render();

  router.history.start({
    pushState: true
  });
});
