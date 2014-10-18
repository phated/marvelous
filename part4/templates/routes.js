/** @jsx React.DOM */
'use strict';

var React = require('react');
var $__0=    require('react-router'),Routes=$__0.Routes,Route=$__0.Route,DefaultRoute=$__0.DefaultRoute;

var Index = require('./index');
var Home = require('./partials/home');
var EventInfo = require('./partials/event-info');

var routes = (
  Routes({location: "history"}, 
    Route({name: "app", path: "/", handler: Index}, 
      Route({name: "event", path: "/events/:id", handler: EventInfo}), 
      DefaultRoute({handler: Home})
    )
  )
);

module.exports = routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicm91dGVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIge1JvdXRlcywgUm91dGUsIERlZmF1bHRSb3V0ZX0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIEluZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xudmFyIEhvbWUgPSByZXF1aXJlKCcuL3BhcnRpYWxzL2hvbWUnKTtcbnZhciBFdmVudEluZm8gPSByZXF1aXJlKCcuL3BhcnRpYWxzL2V2ZW50LWluZm8nKTtcblxudmFyIHJvdXRlcyA9IChcbiAgPFJvdXRlcyBsb2NhdGlvbj1cImhpc3RvcnlcIj5cbiAgICA8Um91dGUgbmFtZT1cImFwcFwiIHBhdGg9XCIvXCIgaGFuZGxlcj17SW5kZXh9PlxuICAgICAgPFJvdXRlIG5hbWU9XCJldmVudFwiIHBhdGg9XCIvZXZlbnRzLzppZFwiIGhhbmRsZXI9e0V2ZW50SW5mb30gLz5cbiAgICAgIDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZX0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcz5cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9