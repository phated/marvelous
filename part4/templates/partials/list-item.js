/** @jsx React.DOM */
'use strict';

var React = require('react');
var $__0=  require('react-router'),Link=$__0.Link;

var ListItem = React.createClass({displayName: 'ListItem',

  render: function(){
    var $__0=  this.props,event=$__0.event;

    return (
      React.DOM.div(null, 
        Link({to: event.link, className: "list-group-item"}, 
          React.DOM.div({className: "row-picture"}, 
            React.DOM.img({className: "circle", src: event.image, alt: "icon"})
          ), 
          React.DOM.div({className: "row-content"}, 
            React.DOM.h4({className: "list-group-item-heading"}, event.title), 
            React.DOM.p({className: "list-group-item-text"}, event.dateRange)
          )
        ), 
        React.DOM.div({className: "list-group-separator"})
      )
    );
  }
});

module.exports = ListItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbGlzdC1pdGVtLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbGlzdC1pdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIge0xpbmt9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbnZhciBMaXN0SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHtldmVudH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPXtldmVudC5saW5rfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1waWN0dXJlXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNpcmNsZVwiIHNyYz17ZXZlbnQuaW1hZ2V9IGFsdD1cImljb25cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1wiPntldmVudC50aXRsZX08L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtLXRleHRcIj57ZXZlbnQuZGF0ZVJhbmdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==