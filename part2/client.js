'use strict';

var ready = require('domready');

var router = require('./router');

ready(function(){
  router.history.start({
    pushState: true
  });
});
