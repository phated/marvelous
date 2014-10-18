'use strict';

var React = require('react/addons');

var cx = React.addons.classSet;

var PageLink = React.createClass({

  page: function(evt){
    evt.preventDefault();

    var {index, onPage} = this.props;

    onPage(index);
  },

  render: function(){
    var {page} = this.props;

    var classes = cx({
      btn: true,
      'btn-danger': true,
      disabled: page.active
    });

    return (
      <a href="#" onClick={this.page} className={classes}>{page.number}</a>
    );
  }
});

module.exports = PageLink;
