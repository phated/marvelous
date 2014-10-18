'use strict';

var crypto = require('crypto');

var _ = require('lodash');
var rest = require('rest');
var mime = require('rest/interceptor/mime');

var client = rest
  .wrap(mime, { mime: 'application/json' });

var publicKey = process.env.MARVEL_PUBLIC_KEY;
var privateKey = process.env.MARVEL_PRIVATE_KEY;

function apiRequest(options){
  var time = Date.now();
  var hash = crypto.createHash('md5').update(time + privateKey + publicKey).digest('hex');

  var opts = _.merge({
    params: {
      ts: time,
      apikey: publicKey,
      hash: hash,
      limit: 20
    }
  }, options);

  return client(opts);
}

module.exports = apiRequest;
