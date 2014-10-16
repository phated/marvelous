'use strict';

var _ = require('lodash');

function isPurchaseUrl(items, options){
  var result = _.reduce(items, function(result, item){
    if(item.type === 'purchase'){
      return options.fn(item);
    }

    return result;
  }, '');

  if(!result){
    result = options.inverse(_.first(items));
  }

  return result;
}

module.exports = isPurchaseUrl;
