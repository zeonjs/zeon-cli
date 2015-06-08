'use strict';

var commands = require('./cmd');

var minimist = require('minimist');
var abbrev = require('abbrev');

var args = minimist(process.argv.splice(2));
var alias = abbrev(Object.keys(commands)); // the cmd alias name, type of Object.

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

  // run cli
  commands[cmd].call({
    base_dir: process.cwd()
  }, args);

};
