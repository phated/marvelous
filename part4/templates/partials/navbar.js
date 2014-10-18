/** @jsx React.DOM */
'use strict';

var React = require('react');
var $__0=  require('react-router'),Link=$__0.Link;

var Navbar = React.createClass({displayName: 'Navbar',

  render: function(){
    return (
      React.DOM.div({className: "navbar navbar-danger"}, 
        React.DOM.div({className: "navbar-header"}, 
          React.DOM.button({type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 'data-target': ".navbar-warning-collapse"}, 
            React.DOM.span({className: "icon-bar"}), 
            React.DOM.span({className: "icon-bar"}), 
            React.DOM.span({className: "icon-bar"})
          ), 
          Link({className: "navbar-brand", to: "/"}, "Marvelous")
        ), 
        React.DOM.div({className: "navbar-collapse collapse navbar-warning-collapse"}, 
          React.DOM.form({className: "navbar-form navbar-right"}, 
            React.DOM.input({type: "text", className: "form-control col-lg-8", placeholder: "Search"})
          )
        )
      )
    );
  }
});

module.exports = Navbar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbmF2YmFyLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIge0xpbmt9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbnZhciBOYXZiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFuZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLXdhcm5pbmctY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5NYXJ2ZWxvdXM8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXZiYXItd2FybmluZy1jb2xsYXBzZVwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1sZy04XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=