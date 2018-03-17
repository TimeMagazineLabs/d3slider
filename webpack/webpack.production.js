const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	optimization: {
		minimize: true,
		runtimeChunk: true,
		splitChunks: true
	},
	output: {
		libraryTarget: "window"
		library: "d3slider",
		filename: "d3slider.min.js"
	}
};