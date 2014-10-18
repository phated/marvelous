/** @jsx React.DOM */
'use strict';

var React = require('react');

var ListItem = React.createClass({displayName: 'ListItem',

  navigate: function(evt){
    evt.preventDefault();

    var $__0=   this.props,router=$__0.router,event=$__0.event;

    router.navigate(event.link, { trigger: true });
  },

  render: function(){
    var $__0=  this.props,event=$__0.event;

    return (
      React.DOM.div(null, 
        React.DOM.a({href: event.link, onClick: this.navigate, className: "list-group-item"}, 
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbGlzdC1pdGVtLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbGlzdC1pdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBMaXN0SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBuYXZpZ2F0ZTogZnVuY3Rpb24oZXZ0KXtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB7cm91dGVyLCBldmVudH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcm91dGVyLm5hdmlnYXRlKGV2ZW50LmxpbmssIHsgdHJpZ2dlcjogdHJ1ZSB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHtldmVudH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGhyZWY9e2V2ZW50Lmxpbmt9IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGV9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlXCIgc3JjPXtldmVudC5pbWFnZX0gYWx0PVwiaWNvblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29udGVudFwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nXCI+e2V2ZW50LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiPntldmVudC5kYXRlUmFuZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9