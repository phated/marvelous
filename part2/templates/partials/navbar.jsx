'use strict';

var React = require('react');

var Navbar = React.createClass({

  render: function(){
    return (
      <div className="navbar navbar-danger">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-warning-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Marvelous</a>
        </div>
        <div className="navbar-collapse collapse navbar-warning-collapse">
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control col-lg-8" placeholder="Search" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
