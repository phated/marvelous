/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Events = require('../collections/events');

var Index = React.createClass({displayName: 'Index',

  statics: {
    getAsyncProps: function(){
      var data = [];
      if(typeof window !== 'undefined'){
        data = global.data.app.eventList;
      }

      var events = new Events(data);
      var eventList = events.fetch();

      return {
        eventList: eventList
      };
    }
  },

  getInitialState: function(){
    return {
      page: 0
    };
  },

  page: function(idx){
    this.props.eventList.setPage(idx);
    this.setState({
      page: idx // to trigger re-render
    });
  },

  render: function(){
    var $__0=   this.props,router=$__0.router,eventList=$__0.eventList;

    var listItems = [];
    var pages = [];
    if(eventList){
      var list = eventList.getActivePage();

      listItems = list.map(function(event){
        return ListItem({key: event.id, event: event})
      });

      pages = eventList.getPages();
    }

    return (
      React.DOM.div(null, 
        Navbar({router: router}), 

        React.DOM.div({className: "container-fluid"}, 
          React.DOM.div({className: "row"}, 
            React.DOM.div({className: "col-sm-5 col-md-4 col-lg-3"}, 
              React.DOM.div({className: "btn-toolbar"}, 
                Pagination({pages: pages, onPage: this.page})
              ), 

              React.DOM.div({id: "event-list", className: "list-group"}, 
                listItems
              )
            ), 

            React.DOM.div({className: "col-sm-7 col-md-8 col-lg-9"}, 
              this.props.activeRouteHandler(null)
            )
          )
        )
      )
    );
  }
});

module.exports = Index;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9wYXJ0aWFscy9uYXZiYXInKTtcbnZhciBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vcGFydGlhbHMvbGlzdC1pdGVtJyk7XG52YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFydGlhbHMvcGFnaW5hdGlvbicpO1xuXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbnMvZXZlbnRzJyk7XG5cbnZhciBJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBzdGF0aWNzOiB7XG4gICAgZ2V0QXN5bmNQcm9wczogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkYXRhID0gW107XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGRhdGEgPSBnbG9iYWwuZGF0YS5hcHAuZXZlbnRMaXN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cyhkYXRhKTtcbiAgICAgIHZhciBldmVudExpc3QgPSBldmVudHMuZmV0Y2goKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnRMaXN0OiBldmVudExpc3RcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMFxuICAgIH07XG4gIH0sXG5cbiAgcGFnZTogZnVuY3Rpb24oaWR4KXtcbiAgICB0aGlzLnByb3BzLmV2ZW50TGlzdC5zZXRQYWdlKGlkeCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdlOiBpZHggLy8gdG8gdHJpZ2dlciByZS1yZW5kZXJcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHtyb3V0ZXIsIGV2ZW50TGlzdH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdmFyIGxpc3RJdGVtcyA9IFtdO1xuICAgIHZhciBwYWdlcyA9IFtdO1xuICAgIGlmKGV2ZW50TGlzdCl7XG4gICAgICB2YXIgbGlzdCA9IGV2ZW50TGlzdC5nZXRBY3RpdmVQYWdlKCk7XG5cbiAgICAgIGxpc3RJdGVtcyA9IGxpc3QubWFwKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2V2ZW50LmlkfSBldmVudD17ZXZlbnR9IC8+XG4gICAgICB9KTtcblxuICAgICAgcGFnZXMgPSBldmVudExpc3QuZ2V0UGFnZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciByb3V0ZXI9e3JvdXRlcn0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01IGNvbC1tZC00IGNvbC1sZy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBwYWdlcz17cGFnZXN9IG9uUGFnZT17dGhpcy5wYWdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtbGlzdFwiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS03IGNvbC1tZC04IGNvbC1sZy05XCI+XG4gICAgICAgICAgICAgIDx0aGlzLnByb3BzLmFjdGl2ZVJvdXRlSGFuZGxlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=