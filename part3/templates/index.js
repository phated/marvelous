/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Index = React.createClass({displayName: 'Index',

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

    var list = eventList.getActivePage();
    var pages = eventList.getPages();

    var listItems = list.map(function(event){
      return ListItem({key: event.id, event: event, router: router})
    });

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
              router.activePage
            )
          )
        )
      )
    );
  }
});

module.exports = Index;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9wYXJ0aWFscy9uYXZiYXInKTtcbnZhciBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vcGFydGlhbHMvbGlzdC1pdGVtJyk7XG52YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFydGlhbHMvcGFnaW5hdGlvbicpO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlOiAwXG4gICAgfTtcbiAgfSxcblxuICBwYWdlOiBmdW5jdGlvbihpZHgpe1xuICAgIHRoaXMucHJvcHMuZXZlbnRMaXN0LnNldFBhZ2UoaWR4KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhZ2U6IGlkeCAvLyB0byB0cmlnZ2VyIHJlLXJlbmRlclxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIge3JvdXRlciwgZXZlbnRMaXN0fSA9IHRoaXMucHJvcHM7XG5cbiAgICB2YXIgbGlzdCA9IGV2ZW50TGlzdC5nZXRBY3RpdmVQYWdlKCk7XG4gICAgdmFyIHBhZ2VzID0gZXZlbnRMaXN0LmdldFBhZ2VzKCk7XG5cbiAgICB2YXIgbGlzdEl0ZW1zID0gbGlzdC5tYXAoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2V2ZW50LmlkfSBldmVudD17ZXZlbnR9IHJvdXRlcj17cm91dGVyfSAvPlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNSBjb2wtbWQtNCBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGFnZXM9e3BhZ2VzfSBvblBhZ2U9e3RoaXMucGFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50LWxpc3RcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNyBjb2wtbWQtOCBjb2wtbGctOVwiPlxuICAgICAgICAgICAgICB7cm91dGVyLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==