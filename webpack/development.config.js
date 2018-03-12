const webpack = require('webpack'); //to access built-in plugins
const autoprefixer = require('autoprefixer')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: './slider.js',
	output: {
		filename: './d3slider.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loaders: 'babel-loader',
				options: {
					presets: [ [ 'env', { modules: false, loose: true	} ] ]
				}
			},
			{
					test: /\.scss$/,
					loaders: [
						'style-loader', 'css-loader', 'sass-loader',
						{ loader: 'postcss-loader', options: { plugins: () => [autoprefixer] }}
				 ]
			},
			{
					test: /\.(png|jpeg|jpg|gif)$/,
					loaders: [ 'url-loader?limit=10000' ]
			}			
		]
	},
	output: {
		libraryTarget: "var", // export itself to a global var
		library: "d3slider",
		filename: "d3slider.js"
	}
};

module.exports = config;