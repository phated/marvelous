'use strict';

var _ = require('lodash');
var SubCollection = require('ampersand-subcollection');

var Collection = require('./collection');

var Event = require('../models/event');

var Events = Collection.extend({

  initialize: function(){
    this._pager = new SubCollection(this);
  },

  model: Event,

  page: 0,
  limit: 10,

  getActivePage: function(){
    var pager = this._pager;
    if(pager.limit == null || pager.offset == null){
      pager.configure({
        offset: this.limit * this.page,
        limit: this.limit
      });
    }
    return pager;
  },

  getPages: function(){
    var currentPage = this.page;

    return _.times(Math.ceil(this.length / 10), function(idx){
      return {
        number: idx + 1,
        active: (idx === currentPage) // first is always active on server render
      };
    });
  },

  setPage: function(idx){
    this.page = idx;
    this._pager.configure({
      offset: this.limit * this.page
    });
  }
});

module.exports = Events;
