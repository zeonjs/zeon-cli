'use strict';

module.exports = exports = function () {
  // path of nodejs
  var nodePath = process.argv[0];
  // path to the file that has been executed
  var execPath = process.argv[1];

  var userArgs = process.argv.splice(2);
  var searchPattern = userArgs[0];
};
