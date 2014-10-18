'use strict';

var React = require('react');

var Home = React.createClass({

  render: function(){
    return (
      <div>
        <div className="col-md-5 col-lg-4">
          <img src="{{thumbnail.path}}/detail.{{thumbnail.extension}}" className="img-rounded img-responsive" />
        </div>

        <div className="col-md-7 col-lg-8">
          <h1>Welcome to Marvelous</h1>
          <p>We handle all your Marvel event needs.</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;
