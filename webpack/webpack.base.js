const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	entry: {
		app: ["babel-polyfill", "./slider.js"],
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: "d3slider",
		filename: "d3slider.js",
		libraryTarget: "window"		
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
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
	}	
};

module.exports = config;