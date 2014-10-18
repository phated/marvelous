'use strict';

var path = require('path');

var keys = require('when/keys');
var mach = require('mach');

var reach = require('./lib/reach');
var template = require('./lib/template');
var construct = require('./lib/construct');
var renderIndex = require('./lib/renderIndex');

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
  var events = getEvents().fold(reach, 'data.results').fold(construct, Events);
  var pages = events.fold(reach, 'getPages');

  var context = {
    eventList: events,
    pages: pages
  };

  return keys.all(context).then(renderIndex);
});

server.get('/favicon.ico', function(){
  return 404;
});

server.get('/events/:id.json', function(request){
  var event = getEvent(request.params.id).fold(reach, 'data.results.0');
  var comics = event.then(getComics).fold(reach, 'data.results').fold(construct, Comics);

  var context = {
    event: event,
    comics: comics
  };

  return keys.all(context).then(mach.json);
});

mach.serve(server, process.env.PORT);
