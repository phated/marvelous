/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navbar = React.createClass({displayName: 'Navbar',

  navigate: function(evt){
    evt.preventDefault();

    var $__0=  this.props,router=$__0.router;
    router.navigate('/', { trigger: true });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbmF2YmFyLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBOYXZiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgbmF2aWdhdGU6IGZ1bmN0aW9uKGV2dCl7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIge3JvdXRlcn0gPSB0aGlzLnByb3BzO1xuICAgIHJvdXRlci5uYXZpZ2F0ZSgnLycsIHsgdHJpZ2dlcjogdHJ1ZSB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYW5nZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItd2FybmluZy1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZX0+TWFydmVsb3VzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgbmF2YmFyLXdhcm5pbmctY29sbGFwc2VcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtbGctOFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9