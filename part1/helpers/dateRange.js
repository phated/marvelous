'use strict';

var moment = require('moment');
require('twix');

function formatDateRange(begin, end){
  return moment.twix(begin, end, { allDay: true }).format();
}

module.exports = formatDateRange;
