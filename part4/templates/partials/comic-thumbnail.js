/** @jsx React.DOM */
'use strict';

var _ = require('lodash');
var React = require('react');

var ComicThumbnail = React.createClass({displayName: 'ComicThumbnail',

  render: function(){
    var comic = this.props.comic;

    var prices = comic.prices.map(function(price, idx){
      return (
        React.DOM.div({key: idx}, 
          price.name, ": $", price.price
        )
      );
    });

    var purchaseButton = React.DOM.button({disabled: true, className: "btn btn-danger btn-block"}, "Nope")

    if(comic.purchaseUrl){
      purchaseButton = React.DOM.a({href: comic.purchaseUrl, className: "btn btn-danger btn-block"}, "Buy Now")
    }

    return (
      React.DOM.div({className: "col-md-3"}, 
        React.DOM.div({className: "thumbnail well"}, 
          React.DOM.img({src: comic.image, className: "img-rounded img-responsive"}), 

          React.DOM.div({className: "caption"}, 
            React.DOM.h4(null, comic.title), 
            React.DOM.div(null, "Prices:"), 
            prices, 
            purchaseButton
          )
        )
      )
    );
  }
});

module.exports = ComicThumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvY29taWMtdGh1bWJuYWlsLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvY29taWMtdGh1bWJuYWlsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQ29taWNUaHVtYm5haWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciBjb21pYyA9IHRoaXMucHJvcHMuY29taWM7XG5cbiAgICB2YXIgcHJpY2VzID0gY29taWMucHJpY2VzLm1hcChmdW5jdGlvbihwcmljZSwgaWR4KXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgIHtwcmljZS5uYW1lfTogJHtwcmljZS5wcmljZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdmFyIHB1cmNoYXNlQnV0dG9uID0gPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIj5Ob3BlPC9idXR0b24+XG5cbiAgICBpZihjb21pYy5wdXJjaGFzZVVybCl7XG4gICAgICBwdXJjaGFzZUJ1dHRvbiA9IDxhIGhyZWY9e2NvbWljLnB1cmNoYXNlVXJsfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIj5CdXkgTm93PC9hPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsIHdlbGxcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y29taWMuaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1yb3VuZGVkIGltZy1yZXNwb25zaXZlXCIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgPGg0Pntjb21pYy50aXRsZX08L2g0PlxuICAgICAgICAgICAgPGRpdj5QcmljZXM6PC9kaXY+XG4gICAgICAgICAgICB7cHJpY2VzfVxuICAgICAgICAgICAge3B1cmNoYXNlQnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbWljVGh1bWJuYWlsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9