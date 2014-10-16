'use strict';

var View = require('ampersand-view');

var home = require('../build/templates/home');

var Home = View.extend({
  template: home,

  render: function(){
    this.renderWithTemplate();
    return this;
  }
});

module.exports = Home;
