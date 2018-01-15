const WebpackDevServer = require( 'webpack-dev-server' );
const webpack          = require( 'webpack' );
const compiler         = webpack( require( './dev.config.js' ) );
const fs               = require( 'fs-extra' );
const path             = require( 'path' );

// The clean webpack and copy webpack plugins aren't working correctly, so we'll
// just do those here.

const contentBase = path.resolve( __dirname, '../dist' );
const assetBase = path.resolve( __dirname, '../src/assets' );

fs.emptyDirSync( contentBase, ( err ) => {
  if ( err ) {
    console.log( 'An error occurred when trying to empty the build directory.' );
    process.exit();
  }
});

fs.copy( assetBase, contentBase, ( e ) => {
  if ( e ) {
    console.log( 'An error occured when trying to copy the assets into the build directory.' );
    process.exit();
  }
  console.log( 'Assets have been copied. You are good to go.' );
});


const server = new WebpackDevServer( compiler, {
  contentBase: '../dist/',
  hot: true,
  historyApiFallback: false,
  compress: true,
  staticOptions: {},
  filename: 'script-min.js',
  inline: true,
  lazy: false,
  noInfo: true,
  quiet: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  publicPath: '/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

server.listen( 3000, 'localhost', () => {
  console.log( '\n   🍺  ===> Development server has started at http://localhost:3000\n' );
});