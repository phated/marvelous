/** @jsx React.DOM */
'use strict';

var React = require('react/addons');

var cx = React.addons.classSet;

var PageLink = React.createClass({displayName: 'PageLink',

  page: function(evt){
    evt.preventDefault();

    var $__0=   this.props,index=$__0.index,onPage=$__0.onPage;

    onPage(index);
  },

  render: function(){
    var $__0=  this.props,page=$__0.page;

    var classes = cx({
      btn: true,
      'btn-danger': true,
      disabled: page.active
    });

    return (
      React.DOM.a({href: "#", onClick: this.page, className: classes}, page.number)
    );
  }
});

module.exports = PageLink;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvcGFnZS1saW5rLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvcGFnZS1saW5rLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xuXG52YXIgY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG5cbnZhciBQYWdlTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBwYWdlOiBmdW5jdGlvbihldnQpe1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHtpbmRleCwgb25QYWdlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvblBhZ2UoaW5kZXgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIge3BhZ2V9ID0gdGhpcy5wcm9wcztcblxuICAgIHZhciBjbGFzc2VzID0gY3goe1xuICAgICAgYnRuOiB0cnVlLFxuICAgICAgJ2J0bi1kYW5nZXInOiB0cnVlLFxuICAgICAgZGlzYWJsZWQ6IHBhZ2UuYWN0aXZlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnBhZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlc30+e3BhZ2UubnVtYmVyfTwvYT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlTGluaztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==