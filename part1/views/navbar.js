'use strict';

var View = require('ampersand-view');

var router = require('../router');

var navbar = require('../build/templates/navbar');

var Home = View.extend({
  template: navbar,

  events: {
    'click a': 'navigate'
  },

  navigate: function(evt){
    evt.preventDefault();

    router.navigate(evt.delegateTarget.pathname, { trigger: true });
  },

  render: function(){
    this.renderWithTemplate();
    return this;
  }
});

module.exports = Home;
