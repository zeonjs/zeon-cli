'use strict';

var fs = require('fs');
var path = require('path');
var YAML = require('yamljs');

// load config file
exports.load = function Load (rootDir) {
  var baseDir = rootDir || this.base_dir || process.cwd();
  var configPath = path.join(baseDir, 'zeon-config.yml');

  if (fs.existsSync(configPath)) {
    // console.log(configPath);
    return YAML.load(configPath);
  } else {
    return null;
  }
};
