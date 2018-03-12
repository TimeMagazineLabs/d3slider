const webpack = require('webpack'); //to access built-in plugins
const autoprefixer = require('autoprefixer');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: './slider.js',
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
	},
	optimization: {
		minimize: true,
		runtimeChunk: true,
		splitChunks: {
				chunks: "async",
				minSize: 1000,
				minChunks: 2,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				name: true,
				cacheGroups: {
						default: {
								minChunks: 1,
								priority: -20,
								reuseExistingChunk: true,
						},
						vendors: {
								test: /[\\/]node_modules[\\/]/,
								priority: -10
						}
				}
		}
	},
  output: {
    libraryTarget: "var", // export itself to a global var
    library: "d3slider",
    filename: "d3slider.min.js"
	}
};

module.exports = config;