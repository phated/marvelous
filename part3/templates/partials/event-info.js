'use strict';

var _ = require('lodash');
var React = require('react');

var ComicThumbnail = require('./comic-thumbnail');

var EventInfo = React.createClass({displayName: 'EventInfo',

  render: function(){
    var event = this.props.event;

    var comicRows = _(this.props.comics.models)
      .chunk(4)
      .map(function(comicChunk){
        var comics = comicChunk.map(function(comic){
          return React.createElement(ComicThumbnail, {comic: comic})
        });

        return (
          React.createElement("div", {className: "row"}, 
            comics
          )
        );
      }).value();

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-5 col-lg-4"}, 
            React.createElement("img", {src: event.image, className: "img-rounded img-responsive"})
          ), 

          React.createElement("div", {className: "col-md-7 col-lg-8"}, 
            React.createElement("h1", null, event.title), 
            React.createElement("p", null, event.description)
          )
        ), 

        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-12"}, 
            React.createElement("h2", null, "Which Comics?")
          ), 
          React.createElement("div", {className: "col-lg-12"}, 
            comicRows
          )
        )
      )
    );
  }
});

module.exports = EventInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvZXZlbnQtaW5mby5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbInBhcnRpYWxzL2V2ZW50LWluZm8uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21pY1RodW1ibmFpbCA9IHJlcXVpcmUoJy4vY29taWMtdGh1bWJuYWlsJyk7XG5cbnZhciBFdmVudEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciBldmVudCA9IHRoaXMucHJvcHMuZXZlbnQ7XG5cbiAgICB2YXIgY29taWNSb3dzID0gXyh0aGlzLnByb3BzLmNvbWljcy5tb2RlbHMpXG4gICAgICAuY2h1bmsoNClcbiAgICAgIC5tYXAoZnVuY3Rpb24oY29taWNDaHVuayl7XG4gICAgICAgIHZhciBjb21pY3MgPSBjb21pY0NodW5rLm1hcChmdW5jdGlvbihjb21pYyl7XG4gICAgICAgICAgcmV0dXJuIDxDb21pY1RodW1ibmFpbCBjb21pYz17Y29taWN9IC8+XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtjb21pY3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KS52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBjb2wtbGctNFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50LmltYWdlfSBjbGFzc05hbWU9XCJpbWctcm91bmRlZCBpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IGNvbC1sZy04XCI+XG4gICAgICAgICAgICA8aDE+e2V2ZW50LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aDI+V2hpY2ggQ29taWNzPzwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgIHtjb21pY1Jvd3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9