'use strict';

var chalk = require('chalk');
var express = require('express');
var app = express();


exports = module.exports = function () {
  var root = process.cwd();

  var server = app.listen(8000, function () {
    app.use(express.static(root));

    var port = server.address().port;
    console.log(chalk.green('> Server at http://127.0.0.1:%s, press [CTRL+C] to stop server.'), port);
  });
};
