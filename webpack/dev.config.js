const webpack = require('webpack'); //to access built-in plugins
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: './debug.js',
  output: {
    filename: './script.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [ [ 'es2015', { modules: false, loose: true  } ] ]
        }
      },
      {
          test: /\.json$/,
          loaders: [ 'json-loader' ]
      },
      { 
          test: /\.css$/,
          loaders: [
            'style-loader', 'css-loader',
            {loader: 'postcss-loader', options: { plugins: () => [autoprefixer] }}
         ]
      },
      { 
          test: /\.less$/,
          loaders: [
            'style-loader', 'css-loader', 
            {loader: 'postcss-loader', options: { plugins: () => [autoprefixer] }}
         ]
      },
      {
          test: /\.scss$/,
          loaders: [
            'style-loader', 'css-loader',
            {loader: 'postcss-loader', options: { plugins: () => [autoprefixer] }}
         ]
      },
      { 
          test: /\.html$/,
          loaders: [ 'underscore-template-loader' ] 
      },
      {
          test: /\.(csv|tsv)$/,
          loaders: [ 'dsv-loader' ]
      },
      {
          test: /\.(png|jpeg|jpg|gif)$/,
          loaders: [ 'url-loader?limit=10000' ]
      }      
    ]
  }
};

module.exports = config;