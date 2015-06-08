'use strict';

var fs      = require('fs');
var path    = require('path');
var chalk   = require('chalk');
var express = require('express');

exports = module.exports = function (args) {
  var app     = express();
  var baseDir = this.base_dir;
  var port    = args.p || args.port || 40000;

  var server = app.listen(port, function () {
    app.use(express.static(baseDir));

    // var port = server.address().port;
    var host = server.address().address;
    host = (host == '::') ? '127.0.0.1' : host;

    console.log(chalk.green('> Server at http://%s:%s, press [CTRL+C] to stop server.'), host, port);
  });
};
