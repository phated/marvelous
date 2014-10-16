'use strict';

function priceType(type){
  if(type === 'printPrice'){
    return 'Print';
  }

  if(type === 'digitalPurchasePrice'){
    return 'Digital';
  }

  return 'Unknown';
}

module.exports = priceType;
