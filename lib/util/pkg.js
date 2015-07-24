var fs = require( 'fs' );
var path = require( 'path' );

// pkg.getPackages(/^zeon-ms/);

function getPackages(pattern, dir) {
    function filter( item ) {
        if ( item === 'zeon-dev' || item === 'zeon' ) {
            return false;
        }

        return pattern.test( item );
    }

    var pkgs = [];
    if ( dir ) {
        pkgs = fs.readdirSync( dir );
    }
    else {
        dir = path.join( __dirname, '../..', 'node_modules' );
        pkgs = pkgs.concat( fs.readdirSync( dir ) );

        dir = path.join( __dirname, '../..', '..' );
        pkgs = pkgs.concat( fs.readdirSync( dir ) );
    }

    // 如果不同目录下存在相同的包，需要去重
    var len = pkgs.length;
    var visited = {};
    while (len--) {
        if (visited[pkgs[len]]) {
            pkgs.splice(len, 1);
        }

        visited[pkgs[len]] = 1;
    }

    return pkgs.filter( filter );
}

exports.getPackages = getPackages;
