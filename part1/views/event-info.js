'use strict';

var View = require('ampersand-view');

var eventInfo = require('../build/templates/event-info');

var EventInfo = View.extend({
  template: eventInfo,

  initialize: function(){
    this.model.on('change', this.render.bind(this));
  },

  render: function(){
    this.renderWithTemplate(this.model);
    return this;
  }
});

module.exports = EventInfo;
