'use strict';

var path = require('path');

var keys = require('when/keys');
var mach = require('mach');

var reach = require('./lib/reach');
var construct = require('./lib/construct');
var renderIndex = require('./lib/renderIndex');

var Event = require('./models/event');
var Events = require('./collections/events');
var Comics = require('./collections/comics');

var getEvent = require('./lib/getEvent');
var getEvents = require('./lib/getEvents');
var getComics = require('./lib/getComics');

var server = mach.stack();

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

server.get('*', function(request){
  return renderIndex(request.params.splat);
});

server.get('/favicon.ico', function(){
  return 404;
});

server.get('/events.json', function(request){
  var events = getEvents().fold(reach, 'data.results').fold(construct, Events);

  return events.then(mach.json);
});

server.get('/events/:id.json', function(request){
  var event = getEvent(request.params.id).fold(reach, 'data.results.0');
  var comics = event.then(getComics).fold(reach, 'data.results').fold(construct, Comics);

  var context = {
    event: event.fold(construct, Event),
    comics: comics
  };

  return keys.all(context).then(mach.json);
});

mach.serve(server, process.env.PORT);
