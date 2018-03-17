const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
	mode: 'evelopment',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	output: {
		library: "d3slider",
		filename: "d3slider.js"
	}
});