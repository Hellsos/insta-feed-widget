const path = require( 'path' );

module.exports = {
	entry : {
		bundle : './src/index.tsx'
	},
	watch : true,
	output : {
		path : path.join( __dirname, '/dist' ),
		filename : '[name].min.js'
	},
	resolve : {
		extensions : [ '.ts', '.tsx', '.js' ]
	},
	module : {
		rules : [
			{
				test : /\.tsx?$/,
				exclude : /\.tets.tsx?$/,
				loader : 'ts-loader'
			}
		]
	}
};
