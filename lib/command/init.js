'use strict';

var _ = require("lodash");
var inquirer = require("inquirer");
var chalk = require('chalk');
var pkg = require('../util/pkg');

exports = module.exports = function(args){
  var baseDir = this.base_dir;
  var userOption = this.user_option;

  var defaultChoices = [{
    name: 'Sorry, I want Gundam...',
    value: 'exit'
  }];

  var msList = [];
  pkg.getPackages(/^zeon-ms/).map(function (ms, index) {
    var id = ms.replace(/zeon-/g, '').toUpperCase();
    msList.push({
      name: chalk.green(id),
      value: {
        id: id,
        command: 'attack',
        namespace: ms
      }
    });
  });

  inquirer.prompt([{
    name: 'MS',
    type: 'list',
    message: chalk.yellow('which Mobile Suit you want to choose?'),
    choices: _.flatten([
      new inquirer.Separator(),
      msList,
      // new inquirer.Separator(),
      defaultChoices,
      new inquirer.Separator()
    ])
  }], function(choice) {
    if (choice.MS.command === 'attack') {
      var namespace = choice.MS.namespace;
      var nodeModule = require(namespace);

      if (typeof nodeModule.init === 'function') {
        nodeModule.init.call({
          base_dir: baseDir,
          user_option: userOption
        }, args);
      }
      else {
        console.log(chalk.red('# the [%s] is broken!'), choice.MS.id);
      }
    }

  });
};
