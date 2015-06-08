'use strict';

var fs = require('fs');
var path = require('path');
var YAML = require('yamljs');

// load config file
exports.load = function Load () {
  var configPath = path.join(process.cwd(), 'zeon-config.yml');

  if (fs.existsSync(configPath)) {
    return YAML.load(configPath);
  } else {
    return {};
  }
};
