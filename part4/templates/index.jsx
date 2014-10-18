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

var Index = React.createClass({

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
    var {pages} = this.state;

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
    var {router} = this.props;
    var {pages} = this.props;

    var listItems = [];
    if(pages){
      var list = new SubCollection(this.props.eventList, this.state.pagination);

      listItems = list.map(function(event){
        return <ListItem key={event.id} event={event} router={router} />
      });
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
