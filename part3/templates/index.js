'use strict';

var React = require('react');
var SubCollection = require('ampersand-subcollection');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Index = React.createClass({displayName: 'Index',

  getInitialState: function(){
    return {
      pagination: {
        limit: 10,
        offset: 0
      },
      pages: this.props.pages
    };
  },

  page: function(idx){
    var $__0=  this.state,pages=$__0.pages;

    this.setState({
      pagination: {
        limit: 10,
        offset: idx * 10
      },
      pages: pages.map(function(page, pageIdx){
        return {
          number: page.number,
          active: (pageIdx === idx)
        };
      })
    });
  },

  render: function(){
    var $__0=  this.props,router=$__0.router;
    var $__1=  this.state,pages=$__1.pages;

    var list = new SubCollection(this.props.eventList, this.state.pagination);

    var listItems = list.map(function(event){
      return React.createElement(ListItem, {key: event.id, event: event, router: router})
    });

    return (
      React.createElement("div", null, 
        React.createElement(Navbar, {router: router}), 

        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-sm-5 col-md-4 col-lg-3"}, 
              React.createElement("div", {className: "btn-toolbar"}, 
                React.createElement(Pagination, {pages: pages, onPage: this.page})
              ), 

              React.createElement("div", {id: "event-list", className: "list-group"}, 
                listItems
              )
            ), 

            React.createElement("div", {className: "col-sm-7 col-md-8 col-lg-9"}, 
              this.props.activePage
            )
          )
        )
      )
    );
  }
});

module.exports = Index;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN1YkNvbGxlY3Rpb24gPSByZXF1aXJlKCdhbXBlcnNhbmQtc3ViY29sbGVjdGlvbicpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9wYXJ0aWFscy9uYXZiYXInKTtcbnZhciBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vcGFydGlhbHMvbGlzdC1pdGVtJyk7XG52YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFydGlhbHMvcGFnaW5hdGlvbicpO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9LFxuICAgICAgcGFnZXM6IHRoaXMucHJvcHMucGFnZXNcbiAgICB9O1xuICB9LFxuXG4gIHBhZ2U6IGZ1bmN0aW9uKGlkeCl7XG4gICAgdmFyIHtwYWdlc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgb2Zmc2V0OiBpZHggKiAxMFxuICAgICAgfSxcbiAgICAgIHBhZ2VzOiBwYWdlcy5tYXAoZnVuY3Rpb24ocGFnZSwgcGFnZUlkeCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbnVtYmVyOiBwYWdlLm51bWJlcixcbiAgICAgICAgICBhY3RpdmU6IChwYWdlSWR4ID09PSBpZHgpXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIge3JvdXRlcn0gPSB0aGlzLnByb3BzO1xuICAgIHZhciB7cGFnZXN9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHZhciBsaXN0ID0gbmV3IFN1YkNvbGxlY3Rpb24odGhpcy5wcm9wcy5ldmVudExpc3QsIHRoaXMuc3RhdGUucGFnaW5hdGlvbik7XG5cbiAgICB2YXIgbGlzdEl0ZW1zID0gbGlzdC5tYXAoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2V2ZW50LmlkfSBldmVudD17ZXZlbnR9IHJvdXRlcj17cm91dGVyfSAvPlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBjb2wtbWQtNCBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGFnZXM9e3BhZ2VzfSBvblBhZ2U9e3RoaXMucGFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50LWxpc3RcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNyBjb2wtbWQtOCBjb2wtbGctOVwiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3RpdmVQYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=