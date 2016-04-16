var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/app');

var htmlConfig = new HtmlWebpackPlugin({
	template: APP_DIR + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

var copyConfig = new CopyWebpackPlugin([
	{from: APP_DIR+'/extension', to: './', force: false}
])

module.exports = {
	entry:  APP_DIR + '/index.jsx',
	
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		  { test: /\.jsx?$/, include: APP_DIR, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
		]
	},

  	plugins: [htmlConfig, copyConfig]
}