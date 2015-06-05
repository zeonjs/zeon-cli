'use strict';

var CMD = ['init', 'server', 'deploy'];

var chalk = require('chalk');
var minimist = require('minimist');
var abbrev = require('abbrev');

var args = minimist(process.argv.splice(2));
var alias = abbrev(CMD);

// Change the title in console
process.title = 'zeon'; // Sieg Zeon

exports = module.exports = function () {

  var cmd = args._.shift();

  if (alias[cmd] == 'server') {
    require('./server')();
  }


  /*// path of nodejs
  var nodePath = process.argv[0];
  // path to the file that has been executed
  var execPath = process.argv[1];

  var userArgs = process.argv.splice(2);
  var searchPattern = userArgs[0];

  // Sieg Zeon
  console.log(chalk.yellow.bgRed('Sieg Zeon'));*/
};
