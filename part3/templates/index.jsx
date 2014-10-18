'use strict';

var React = require('react');

var Navbar = require('./partials/navbar');
var ListItem = require('./partials/list-item');
var Pagination = require('./partials/pagination');

var Index = React.createClass({

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

    var list = eventList.getActivePage();
    var pages = eventList.getPages();

    var listItems = list.map(function(event){
      return <ListItem key={event.id} event={event} router={router} />
    });

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
              {this.props.activePage}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
