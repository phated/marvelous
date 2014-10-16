'use strict';

var View = require('ampersand-view');

var router = require('../router');

var listItem = require('../build/templates/listItem');

var ListItem = View.extend({
  template: listItem,
  render: function(){
    this.renderWithTemplate(this.model);
    return this;
  }
});

var List = View.extend({
  template: '<div id="event-list" class="list-group"></div>',

  events: {
    'click a': 'navigate'
  },

  navigate: function(evt){
    evt.preventDefault();

    router.navigate(evt.delegateTarget.pathname, { trigger: true });
  },

  render: function(){
    this.renderWithTemplate();
    this.renderCollection(this.collection, ListItem);
    return this;
  }
});

module.exports = List;
