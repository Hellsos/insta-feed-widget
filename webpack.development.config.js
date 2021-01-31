const base = require( './webpack.config' );

const { merge } = require( 'webpack-merge' );

const clientConfig = merge( base, {
	mode : 'development',
	devtool : 'inline-source-map'
} );

module.exports = clientConfig;
