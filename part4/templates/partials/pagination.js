/** @jsx React.DOM */
'use strict';

var React = require('react');

var PageLink = require('./page-link');

var Pagination = React.createClass({displayName: 'Pagination',

  render: function(){
    var $__0=   this.props,pages=$__0.pages,onPage=$__0.onPage;

    var links = [];

    if(pages){
      links = pages.map(function(page, idx){
        return PageLink({onPage: onPage, key: idx, page: page, index: idx})
      });
    }

    return (
      React.DOM.div({id: "pagination", className: "btn-group btn-group-justified"}, 
        links
      )
    );
  }
});

module.exports = Pagination;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvcGFnaW5hdGlvbi5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbInBhcnRpYWxzL3BhZ2luYXRpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFBhZ2VMaW5rID0gcmVxdWlyZSgnLi9wYWdlLWxpbmsnKTtcblxudmFyIFBhZ2luYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciB7cGFnZXMsIG9uUGFnZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgdmFyIGxpbmtzID0gW107XG5cbiAgICBpZihwYWdlcyl7XG4gICAgICBsaW5rcyA9IHBhZ2VzLm1hcChmdW5jdGlvbihwYWdlLCBpZHgpe1xuICAgICAgICByZXR1cm4gPFBhZ2VMaW5rIG9uUGFnZT17b25QYWdlfSBrZXk9e2lkeH0gcGFnZT17cGFnZX0gaW5kZXg9e2lkeH0gLz5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGFnaW5hdGlvblwiIGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtanVzdGlmaWVkXCI+XG4gICAgICAgIHtsaW5rc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2luYXRpb247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=