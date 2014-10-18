'use strict';

var React = require('react');

var PageLink = require('./page-link');

var Pagination = React.createClass({

  render: function(){
    var {pages, onPage} = this.props;

    var links = [];

    if(pages){
      links = pages.map(function(page, idx){
        return <PageLink onPage={onPage} key={idx} page={page} index={idx} />
      });
    }

    return (
      <div id="pagination" className="btn-group btn-group-justified">
        {links}
      </div>
    );
  }
});

module.exports = Pagination;
