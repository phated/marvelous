'use strict';

var _ = require('lodash');
var React = require('react');

var ComicThumbnail = React.createClass({

  render: function(){
    var comic = this.props.comic;

    var prices = comic.prices.map(function(price){
      return (
        <div>
          {price.name}: ${price.price}
        </div>
      );
    });

    var purchaseButton = <button disabled className="btn btn-danger btn-block">Nope</button>

    if(comic.purchaseUrl){
      purchaseButton = <a href={comic.purchaseUrl} className="btn btn-danger btn-block">Buy Now</a>
    }

    return (
      <div className="col-md-3">
        <div className="thumbnail well">
          <img src={comic.image} className="img-rounded img-responsive" />

          <div className="caption">
            <h4>{comic.title}</h4>
            <div>Prices:</div>
            {prices}
            {purchaseButton}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComicThumbnail;
