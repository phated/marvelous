'use strict';

var React = require('react');
var {Link} = require('react-router');

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
          <Link className="navbar-brand" to="/">Marvelous</Link>
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
