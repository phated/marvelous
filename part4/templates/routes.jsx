'use strict';

var React = require('react');
var {Routes, Route, DefaultRoute} = require('react-router');

var Index = require('./index');
var Home = require('./partials/home');
var EventInfo = require('./partials/event-info');

var routes = (
  <Routes location="history">
    <Route name="app" path="/" handler={Index}>
      <Route name="event" path="/events/:id" handler={EventInfo} />
      <DefaultRoute handler={Home} />
    </Route>
  </Routes>
);

module.exports = routes;
