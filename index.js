
var template = require('lodash.template');
var defaults = require('lodash.defaults');
var path = require('path');
var fs = require('fs');

var defaultOptions = {
  base: '.',
  doubleQuote: false
};
module.exports = {
  //If people want to simply use inlineTemplate as a context for their own _.template call,
  //they can just pass `_.template(myFileData, {inlineTemplate: require('inline-template').fn})
  //and this will work.
  fn: inlineTemplate,
  options: defaultOptions,
  process: function(str, options) {
    return template(str, {
      inlineTemplate: function(url) {
        return inlineTemplate(url, options);
      }
    });
  }
};
function inlineTemplate(templateUrl, opts) {
  opts = defaults(opts || {}, module.exports.options);
  var filepath = path.resolve(opts.base, templateUrl);

  return escapeContent( fs.readFileSync(filepath).toString() );

  function escapeContent(content) {
    content = content.replace(/\r?\n/g, '');
    if (opts.doubleQuote) {
      return content.replace(/"/g, "\\\"");
    } else {
      return content.replace(/'/g, '\\\'');
    }
  }
}

