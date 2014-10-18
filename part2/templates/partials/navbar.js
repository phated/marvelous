'use strict';

var React = require('react');

var Navbar = React.createClass({displayName: 'Navbar',

  render: function(){
    return (
      React.createElement("div", {className: "navbar navbar-danger"}, 
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("button", {type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 'data-target': ".navbar-warning-collapse"}, 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"})
          ), 
          React.createElement("a", {className: "navbar-brand", href: "/"}, "Marvelous")
        ), 
        React.createElement("div", {className: "navbar-collapse collapse navbar-warning-collapse"}, 
          React.createElement("form", {className: "navbar-form navbar-right"}, 
            React.createElement("input", {type: "text", className: "form-control col-lg-8", placeholder: "Search"})
          )
        )
      )
    );
  }
});

module.exports = Navbar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbHMvbmF2YmFyLmpzIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXMiOlsicGFydGlhbHMvbmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBOYXZiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFuZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLXdhcm5pbmctY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPk1hcnZlbG91czwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlIG5hdmJhci13YXJuaW5nLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLWxnLThcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==