var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "    <div class=\"col-md-5 col-lg-4\">\n      <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.path : stack1), depth0))
    + "/detail."
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\" class=\"img-rounded img-responsive\" />\n    </div>\n\n    <div class=\"col-md-7 col-lg-8\">\n      <h1>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n      <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <div class=\"col-md-3\">\n";
  stack1 = this.invokePartial(partials.comicThumbnail, '          ', 'comicThumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<div id=\"main\">\n  <div class=\"row\">\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.event : depth0), {"name":"with","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Which Comics?</h2>\n    </div>\n    <div class=\"col-lg-12\">\n";
  stack1 = ((helpers.eachRow || (depth0 && depth0.eachRow) || helperMissing).call(depth0, (depth0 != null ? depth0.comics : depth0), 4, {"name":"eachRow","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});