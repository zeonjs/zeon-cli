'use strict';

var commands = require('./cmd');
var configHelper   = require('./util/config');
var pkg   = require('./util/pkg');

var minimist = require('minimist');
var abbrev   = require('abbrev');

// console.log(process.argv);
var args     = minimist(process.argv.splice(2));
var alias    = abbrev(Object.keys(commands)); // the cmd alias name, type of Object.

// Change the title in console
process.title = 'zeon'; // Sieg Zeon

exports = module.exports = function () {
  // get cmd
  var cmd = args._.shift();

  if (alias.hasOwnProperty(cmd)) {
    cmd = alias[cmd];
  } else if (args.v || args.version) {
    cmd = 'version';
  } else {
    cmd = 'help';
  }

  var roorDir = process.cwd();
  // run cli
  commands[cmd].call({
    base_dir: roorDir,
    user_option: configHelper.load.call(this, roorDir)
  }, args);

};
