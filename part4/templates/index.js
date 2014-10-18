/** @jsx React.DOM */
'use strict';

var _ = require('lodash');
var React = require('react');
var SubCollection = require('ampersand-subcollection');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Events = require('../collections/events');

function paginate(results){
  return _.times(Math.ceil(results.length / 10), function(idx){
    return {
      number: idx + 1,
      active: (idx === 0) // first is always active on server render
    };
  });
}

var Index = React.createClass({displayName: 'Index',

  statics: {
    getAsyncProps: function(){
      var data = [];
      if(typeof window !== 'undefined'){
        data = global.data.app.eventList;
      }

      var events = new Events(data);
      var eventList = events.fetch();

      var pages = eventList.then(paginate);

      return {
        eventList: eventList,
        pages: pages
      };
    }
  },

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
    var $__1=  this.props,pages=$__1.pages;

    var listItems = [];
    if(pages){
      var list = new SubCollection(this.props.eventList, this.state.pagination);

      listItems = list.map(function(event){
        return ListItem({key: event.id, event: event, router: router})
      });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdWJDb2xsZWN0aW9uID0gcmVxdWlyZSgnYW1wZXJzYW5kLXN1YmNvbGxlY3Rpb24nKTtcblxudmFyIE5hdmJhciA9IHJlcXVpcmUoJy4vcGFydGlhbHMvbmF2YmFyJyk7XG52YXIgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3BhcnRpYWxzL2xpc3QtaXRlbScpO1xudmFyIFBhZ2luYXRpb24gPSByZXF1aXJlKCcuL3BhcnRpYWxzL3BhZ2luYXRpb24nKTtcblxudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2V2ZW50cycpO1xuXG5mdW5jdGlvbiBwYWdpbmF0ZShyZXN1bHRzKXtcbiAgcmV0dXJuIF8udGltZXMoTWF0aC5jZWlsKHJlc3VsdHMubGVuZ3RoIC8gMTApLCBmdW5jdGlvbihpZHgpe1xuICAgIHJldHVybiB7XG4gICAgICBudW1iZXI6IGlkeCArIDEsXG4gICAgICBhY3RpdmU6IChpZHggPT09IDApIC8vIGZpcnN0IGlzIGFsd2F5cyBhY3RpdmUgb24gc2VydmVyIHJlbmRlclxuICAgIH07XG4gIH0pO1xufVxuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgc3RhdGljczoge1xuICAgIGdldEFzeW5jUHJvcHM6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhID0gZ2xvYmFsLmRhdGEuYXBwLmV2ZW50TGlzdDtcbiAgICAgIH1cblxuICAgICAgdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoZGF0YSk7XG4gICAgICB2YXIgZXZlbnRMaXN0ID0gZXZlbnRzLmZldGNoKCk7XG5cbiAgICAgIHZhciBwYWdlcyA9IGV2ZW50TGlzdC50aGVuKHBhZ2luYXRlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnRMaXN0OiBldmVudExpc3QsXG4gICAgICAgIHBhZ2VzOiBwYWdlc1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9LFxuICAgICAgcGFnZXM6IHRoaXMucHJvcHMucGFnZXNcbiAgICB9O1xuICB9LFxuXG4gIHBhZ2U6IGZ1bmN0aW9uKGlkeCl7XG4gICAgdmFyIHtwYWdlc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgb2Zmc2V0OiBpZHggKiAxMFxuICAgICAgfSxcbiAgICAgIHBhZ2VzOiBwYWdlcy5tYXAoZnVuY3Rpb24ocGFnZSwgcGFnZUlkeCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbnVtYmVyOiBwYWdlLm51bWJlcixcbiAgICAgICAgICBhY3RpdmU6IChwYWdlSWR4ID09PSBpZHgpXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIge3JvdXRlcn0gPSB0aGlzLnByb3BzO1xuICAgIHZhciB7cGFnZXN9ID0gdGhpcy5wcm9wcztcblxuICAgIHZhciBsaXN0SXRlbXMgPSBbXTtcbiAgICBpZihwYWdlcyl7XG4gICAgICB2YXIgbGlzdCA9IG5ldyBTdWJDb2xsZWN0aW9uKHRoaXMucHJvcHMuZXZlbnRMaXN0LCB0aGlzLnN0YXRlLnBhZ2luYXRpb24pO1xuXG4gICAgICBsaXN0SXRlbXMgPSBsaXN0Lm1hcChmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHJldHVybiA8TGlzdEl0ZW0ga2V5PXtldmVudC5pZH0gZXZlbnQ9e2V2ZW50fSByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIHJvdXRlcj17cm91dGVyfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTUgY29sLW1kLTQgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiPlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHBhZ2VzPXtwYWdlc30gb25QYWdlPXt0aGlzLnBhZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJldmVudC1saXN0XCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTcgY29sLW1kLTggY29sLWxnLTlcIj5cbiAgICAgICAgICAgICAgPHRoaXMucHJvcHMuYWN0aXZlUm91dGVIYW5kbGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==