'use strict';

var React = require('react');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Events = require('../collections/events');

var Index = React.createClass({

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
    var {router, eventList} = this.props;

    var listItems = [];
    var pages = [];
    if(eventList){
      var list = eventList.getActivePage();

      listItems = list.map(function(event){
        return <ListItem key={event.id} event={event} />
      });

      pages = eventList.getPages();
    }

    return (
      <div>
        <Navbar router={router} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 col-md-4 col-lg-3">
              <div className="btn-toolbar">
                <Pagination pages={pages} onPage={this.page} />
              </div>

              <div id="event-list" className="list-group">
                {listItems}
              </div>
            </div>

            <div className="col-sm-7 col-md-8 col-lg-9">
              <this.props.activeRouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
