/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-places-autocomplete',
  
  contentFor: function(type, envConfig) {
    var content = '';
    if (type === 'body-footer') {
      var src = "//maps.googleapis.com/maps/api/js";
      var config = envConfig['places-autocomplete'] || {};
      src += '?key=' + encodeURIComponent(config.key) + "&libraries=places";
      content = '<script type="text/javascript" src="' + src + '"></script>';
    }
    return content;
  }
};
