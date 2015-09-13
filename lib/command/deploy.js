'use strict';

var _ = require('lodash');

exports = module.exports = function(args){
  var baseDir = this.base_dir;
  var userOption = this.user_option;

  if (typeof userOption !== 'object') userOption = {};
  var config = _.assign({}, userOption);

  var nodeModule = false;

  // config MS
  if (config.MS) {
    var namespace = 'zeon-' + config.MS.toLowerCase();
    nodeModule = require(namespace);

    if (nodeModule.deploy && typeof nodeModule.deploy === 'function') {
      nodeModule.deploy.call(this, config);
    }
  }

};
