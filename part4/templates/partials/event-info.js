/** @jsx React.DOM */
'use strict';

var _ = require('lodash');
var React = require('react');

var ComicThumbnail = require('./comic-thumbnail');

var Model = require('../../models/event-info');

var EventInfo = React.createClass({displayName: 'EventInfo',

  statics: {
    getAsyncProps: function(params){
      var data = [];
      if(typeof window !== 'undefined'){
        data = global.data.event.async;
      }

      var info = new Model(data);
      var asyncProps = info.fetch(params.id);

      return {
        async: asyncProps
      };
    }
  },

  render: function(){
    if(!this.props.async){
      return null;
    }

    var $__0=   this.props.async,event=$__0.event,comics=$__0.comics;

    var comicRows = _(comics.models)
      .chunk(4)
      .map(function(comicChunk, chunkIdx){
        var comics = comicChunk.map(function(comic, idx){
          return ComicThumbnail({key: idx, comic: comic})
        });

        return (
          React.DOM.div({key: chunkIdx, className: "row"}, 
            comics
          )
        );
      }).value();

    return (
      React.DOM.div(null, 
        React.DOM.div({className: "row"}, 
          React.DOM.div({className: "col-md-5 col-lg-4"}, 
            React.DOM.img({src: event.image, className: "img-rounded img-responsive"})
          ), 

          React.DOM.div({className: "col-md-7 col-lg-8"}, 
            React.DOM.h1(null, event.title), 
            React.DOM.p(null, event.description)
          )
        ), 

        React.DOM.div({className: "row"}, 
          React.DOM.div({className: "col-md-12"}, 
            React.DOM.h2(null, "Which Comics?")
          ), 
          React.DOM.div({className: "col-lg-12"}, 
            comicRows
          )
        )
      )
    );
  }
});

module.exports = EventInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvZXZlbnQtaW5mby5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbInBhcnRpYWxzL2V2ZW50LWluZm8uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21pY1RodW1ibmFpbCA9IHJlcXVpcmUoJy4vY29taWMtdGh1bWJuYWlsJyk7XG5cbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9ldmVudC1pbmZvJyk7XG5cbnZhciBFdmVudEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgc3RhdGljczoge1xuICAgIGdldEFzeW5jUHJvcHM6IGZ1bmN0aW9uKHBhcmFtcyl7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhID0gZ2xvYmFsLmRhdGEuZXZlbnQuYXN5bmM7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmZvID0gbmV3IE1vZGVsKGRhdGEpO1xuICAgICAgdmFyIGFzeW5jUHJvcHMgPSBpbmZvLmZldGNoKHBhcmFtcy5pZCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFzeW5jOiBhc3luY1Byb3BzXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuYXN5bmMpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHtldmVudCwgY29taWNzfSA9IHRoaXMucHJvcHMuYXN5bmM7XG5cbiAgICB2YXIgY29taWNSb3dzID0gXyhjb21pY3MubW9kZWxzKVxuICAgICAgLmNodW5rKDQpXG4gICAgICAubWFwKGZ1bmN0aW9uKGNvbWljQ2h1bmssIGNodW5rSWR4KXtcbiAgICAgICAgdmFyIGNvbWljcyA9IGNvbWljQ2h1bmsubWFwKGZ1bmN0aW9uKGNvbWljLCBpZHgpe1xuICAgICAgICAgIHJldHVybiA8Q29taWNUaHVtYm5haWwga2V5PXtpZHh9IGNvbWljPXtjb21pY30gLz5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17Y2h1bmtJZHh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge2NvbWljc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGNvbC1sZy00XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZXZlbnQuaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIGltZy1yZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgY29sLWxnLThcIj5cbiAgICAgICAgICAgIDxoMT57ZXZlbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxoMj5XaGljaCBDb21pY3M/PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAge2NvbWljUm93c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEluZm87XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=