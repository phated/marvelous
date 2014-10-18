/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navbar = React.createClass({displayName: 'Navbar',

  navigate: function(evt){
    evt.preventDefault();

    var $__0=  this.props,router=$__0.router;
    router.navigate('/');
  },

  render: function(){
    return (
      React.DOM.div({className: "navbar navbar-danger"}, 
        React.DOM.div({className: "navbar-header"}, 
          React.DOM.button({type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 'data-target': ".navbar-warning-collapse"}, 
            React.DOM.span({className: "icon-bar"}), 
            React.DOM.span({className: "icon-bar"}), 
            React.DOM.span({className: "icon-bar"})
          ), 
          React.DOM.a({className: "navbar-brand", href: "/", onClick: this.navigate}, "Marvelous")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbmF2YmFyLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBOYXZiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgbmF2aWdhdGU6IGZ1bmN0aW9uKGV2dCl7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIge3JvdXRlcn0gPSB0aGlzLnByb3BzO1xuICAgIHJvdXRlci5uYXZpZ2F0ZSgnLycpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhbmdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci13YXJuaW5nLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlfT5NYXJ2ZWxvdXM8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXZiYXItd2FybmluZy1jb2xsYXBzZVwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1sZy04XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=