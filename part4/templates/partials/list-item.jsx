'use strict';

var React = require('react');
var {Link} = require('react-router');

var ListItem = React.createClass({

  render: function(){
    var {event} = this.props;

    return (
      <div>
        <Link to={event.link} className="list-group-item">
          <div className="row-picture">
            <img className="circle" src={event.image} alt="icon" />
          </div>
          <div className="row-content">
            <h4 className="list-group-item-heading">{event.title}</h4>
            <p className="list-group-item-text">{event.dateRange}</p>
          </div>
        </Link>
        <div className="list-group-separator"></div>
      </div>
    );
  }
});

module.exports = ListItem;
