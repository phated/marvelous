'use strict';

var React = require('react');
var ready = require('domready');

var Index = require('./templates/index');

var createRouter = require('./router');

var Events = require('./collections/events');

var events = new Events(window.data.eventList);

ready(function(){
  var router = createRouter();

  function render(){
    React.renderComponent(Index({
      activePage: router.activePage,
      eventList: events,
      pages: window.data.pages,
      router: router
    }), document.body);
  }

  router.on('change', render);
});
