'use strict';

var React = require('react');

var Home = React.createClass({displayName: 'Home',

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-5 col-lg-4"}, 
          React.createElement("img", {src: "{{thumbnail.path}}/detail.{{thumbnail.extension}}", className: "img-rounded img-responsive"})
        ), 

        React.createElement("div", {className: "col-md-7 col-lg-8"}, 
          React.createElement("h1", null, "Welcome to Marvelous"), 
          React.createElement("p", null, "We handle all your Marvel event needs.")
        )
      )
    );
  }
});

module.exports = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvaG9tZS5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbInBhcnRpYWxzL2hvbWUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGNvbC1sZy00XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJ7e3RodW1ibmFpbC5wYXRofX0vZGV0YWlsLnt7dGh1bWJuYWlsLmV4dGVuc2lvbn19XCIgY2xhc3NOYW1lPVwiaW1nLXJvdW5kZWQgaW1nLXJlc3BvbnNpdmVcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IGNvbC1sZy04XCI+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gTWFydmVsb3VzPC9oMT5cbiAgICAgICAgICA8cD5XZSBoYW5kbGUgYWxsIHlvdXIgTWFydmVsIGV2ZW50IG5lZWRzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9