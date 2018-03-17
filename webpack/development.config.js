const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
	entry: "./slider.js",
	output: {
		path: __dirname + '/../dist',
		library: "d3slider",
		filename: "d3slider.js",
		libraryTarget: "window"
	},
	devtool: 'inline-source-map'
});