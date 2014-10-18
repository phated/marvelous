'use strict';

var _ = require('lodash');
var React = require('react');

var ComicThumbnail = require('./comic-thumbnail');

var EventInfo = React.createClass({

  render: function(){
    var {event, comics} = this.props;

    var comicRows = comics
      .chain()
      .chunk(4)
      .map(function(comicChunk, chunkIdx){
        var comics = comicChunk.map(function(comic, idx){
          return <ComicThumbnail key={idx} comic={comic} />
        });

        return (
          <div key={chunkIdx} className="row">
            {comics}
          </div>
        );
      }).value();

    return (
      <div>
        <div className="row">
          <div className="col-md-5 col-lg-4">
            <img src={event.image} className="img-rounded img-responsive" />
          </div>

          <div className="col-md-7 col-lg-8">
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>Which Comics?</h2>
          </div>
          <div className="col-lg-12">
            {comicRows}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventInfo;
