var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"main\">\n  <div class=\"col-md-5 col-lg-4\">\n    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.path : stack1), depth0))
    + "/detail."
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\" class=\"img-rounded img-responsive\" />\n  </div>\n\n  <div class=\"col-md-7 col-lg-8\">\n    <h1>Welcome to Marvelous</h1>\n    <p>We handle all your Marvel event needs.</p>\n  </div>\n</div>\n";
},"useData":true});