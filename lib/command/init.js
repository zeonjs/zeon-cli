'use strict';

var path     = require('path');
var fs       = require('hexo-fs');

var assetDir = path.join(__dirname, '../../assets');

exports = module.exports = function(args){
  var baseDir = this.base_dir;

  return fs.listDir(assetDir).map(function(item){
    var src = path.join(assetDir, item);
    var destPath = item === 'gitignore' ? '.' + item : item;
    var dest = path.join(target, destPath);

    return fs.copyFile(src, dest).then(function(){
      log.debug('Copied', chalk.magenta(destPath));
    });
  }).then(function(){
    log.info('You are almost done! Don\'t forget to run \'npm install\' before you start blogging with Hexo!');
  });
};
