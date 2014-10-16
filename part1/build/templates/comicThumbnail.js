var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "    <div>\n      "
    + escapeExpression(((helpers.priceType || (depth0 && depth0.priceType) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"priceType","hash":{},"data":data})))
    + ": $"
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <a href="
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + " class=\"btn btn-danger btn-block\">Buy Now</a>\n";
},"5":function(depth0,helpers,partials,data) {
  return "      <button disabled class=\"btn btn-danger btn-block\">Nope</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"thumbnail well\" style=\"padding: 5px;\">\n  <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.path : stack1), depth0))
    + "/portrait_uncanny."
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\" class=\"img-rounded img-responsive\" />\n\n  <div class=\"caption\">\n    <h4>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    <div>Prices:</div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.prices : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.hasPurchaseUrl || (depth0 && depth0.hasPurchaseUrl) || helperMissing).call(depth0, (depth0 != null ? depth0.urls : depth0), {"name":"hasPurchaseUrl","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n";
},"useData":true});