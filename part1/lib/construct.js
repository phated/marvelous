'use strict';

function construct(Ctor, data){
  return new Ctor(data);
}

module.exports = construct;
