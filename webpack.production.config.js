const base = require( './webpack.config' );
const { merge } = require( 'webpack-merge' );

const clientConfig = merge( base, {
	mode : 'production',
	watch : false,
	devtool : 'source-map'
} );

module.exports = clientConfig;
