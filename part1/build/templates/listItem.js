var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<div>\n  <a href=\"/events/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"list-group-item\">\n    <div class=\"row-picture\">\n      <img class=\"circle\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.path : stack1), depth0))
    + "/landscape_small."
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\" alt=\"icon\">\n    </div>\n    <div class=\"row-content\">\n      <h4 class=\"list-group-item-heading\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n      <p class=\"list-group-item-text\">"
    + escapeExpression(((helpers.dateRange || (depth0 && depth0.dateRange) || helperMissing).call(depth0, (depth0 != null ? depth0.start : depth0), (depth0 != null ? depth0.end : depth0), {"name":"dateRange","hash":{},"data":data})))
    + "</p>\n    </div>\n  </a>\n  <div class=\"list-group-separator\"></div>\n</div>\n";
},"useData":true});