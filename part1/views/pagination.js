'use strict';

var _ = require('lodash');
var View = require('ampersand-view');

var pagination = require('../build/templates/pagination');

var Pagination = View.extend({
  template: pagination,

  events: {
    'click a': 'page'
  },

  page: function(evt){
    evt.preventDefault();

    this.collection.setPage(Number(evt.target.getAttribute('data-page')));

    this.render();
  },

  render: function(){
    this.renderWithTemplate({
      pages: this.collection.getPages()
    });

    return this;
  }
});

module.exports = Pagination;
