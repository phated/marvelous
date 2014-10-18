var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div>\n  <a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"list-group-item\">\n    <div class=\"row-picture\">\n      <img class=\"circle\" src=\""
    + escapeExpression(((helper = (helper = helpers.imageSmall || (depth0 != null ? depth0.imageSmall : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageSmall","hash":{},"data":data}) : helper)))
    + "\" alt=\"icon\">\n    </div>\n    <div class=\"row-content\">\n      <h4 class=\"list-group-item-heading\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n      <p class=\"list-group-item-text\">"
    + escapeExpression(((helper = (helper = helpers.dateRange || (depth0 != null ? depth0.dateRange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateRange","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n  </a>\n  <div class=\"list-group-separator\"></div>\n</div>\n";
},"useData":true});