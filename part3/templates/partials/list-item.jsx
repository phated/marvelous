'use strict';

var React = require('react');

var ListItem = React.createClass({

  navigate: function(evt){
    evt.preventDefault();

    var {router, event} = this.props;

    router.navigate(event.link, { trigger: true });
  },

  render: function(){
    var {event} = this.props;

    return (
      <div>
        <a href={event.link} onClick={this.navigate} className="list-group-item">
          <div className="row-picture">
            <img className="circle" src={event.image} alt="icon" />
          </div>
          <div className="row-content">
            <h4 className="list-group-item-heading">{event.title}</h4>
            <p className="list-group-item-text">{event.dateRange}</p>
          </div>
        </a>
        <div className="list-group-separator"></div>
      </div>
    );
  }
});

module.exports = ListItem;
