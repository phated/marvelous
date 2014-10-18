'use strict';

var path = require('path');
var crypto = require('crypto');

var _ = require('lodash');
var when = require('when');
var keys = require('when/keys');
var mach = require('mach');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var React = require('react');

var template = require('./lib/template');

var Index = React.createFactory(require('./templates/index'));

var server = mach.stack();

var client = rest
  .wrap(mime, { mime: 'application/json' });

var publicKey = process.env.MARVEL_PUBLIC_KEY;
var privateKey = process.env.MARVEL_PRIVATE_KEY;

function getResults(entity){
  return entity.data.results;
}

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

function getEvents(){
  return apiRequest({
    path: 'http://gateway.marvel.com/v1/public/events',
    params: {
      limit: 100
    }
  }).entity();
}

function getEvent(id){
  return apiRequest({
    path: 'http://gateway.marvel.com/v1/public/events/{id}',
    params: {
      id: id
    }
  }).entity();
}

function getComics(item){
  return apiRequest({ path: item.comics.collectionURI }).entity();
}

var Event = require('./models/event');

function makeEvent(result){
  return new Event(result);
}

var Events = require('./collections/events');

function makeEventList(results){
  return new Events(results);
}

var Comics = require('./collections/comics');

function makeComicList(results){
  return new Comics(results);
}

function paginate(results){
  return _.times(Math.ceil(results.length / 10), function(idx){
    return {
      number: idx + 1,
      active: (idx === 0) // first is always active on server render
    };
  });
}

server.use(mach.file, {
  root: path.join(__dirname, '../common/'),
  useLastModified: true,
  useEtag: true
});

server.use(mach.file, {
  root: path.join(__dirname, './build/'),
  useLastModified: true,
  useEtag: true
});

server.get('/*', function(request){
  var events = getEvents().then(getResults);

  var context = {
    eventList: events.then(makeEventList),
    pages: events.then(paginate)
  };

  return keys.all(context)
    .then(function(context){
      return template('./templates/index.hbs', {
        body: React.renderToString(Index(context)),
        state: context
      });
    });
});

server.get('/events/:id.json', function(request){
  var event = getEvent(request.params.id).then(getResults).then(_.first);

  var context = {
    event: event.then(makeEvent),
    comics: event.then(getComics).then(getResults).then(makeComicList)
  };

  return keys.all(context).then(mach.json);
});

mach.serve(server, process.env.PORT);
