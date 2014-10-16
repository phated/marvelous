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

    var subcollection = this.collection;

    subcollection.configure({
      offset: Number(evt.target.getAttribute('data-page')) * subcollection.limit
    });

    this.render();
  },

  render: function(){
    var subcollection = this.collection;

    // the underlying collection of the subcollection
    var pages = _.times(Math.ceil(subcollection.collection.length / 10), function(idx){
      return {
        number: idx + 1,
        active: (idx * subcollection.limit === subcollection.offset)
      };
    });

    this.renderWithTemplate({
      pages: pages
    });

    return this;
  }
});

module.exports = Pagination;
