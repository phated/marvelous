'use strict';

var React = require('react');
var SubCollection = require('ampersand-subcollection');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Index = React.createClass({

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
    var {pages} = this.state;

    var list = new SubCollection(this.props.eventList, this.state.pagination);

    var listItems = list.map(function(event){
      return <ListItem key={event.id} event={event} router={router} />
    });

    return (
      <div>
        <Navbar />

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
              {this.props.activePage}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
