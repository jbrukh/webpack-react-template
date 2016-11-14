/*
* @Author: Jake Brukhman
* @Date:   2016-11-14 14:02:00
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2016-11-14 15:21:00
*/

'use strict';

// HTML Webpack Plugin is used to generate the index.html file
// in dist/.
var HtmlPlugin = require('html-webpack-plugin');
var HtmlPluginConfig = new HtmlPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {

  // app entry point
  entry: './app/index.js',

  // All JS gets bundled into this single
  // bundle and placed in the dist/ directory.
  output: {
    filename: 'bundle.js',             // collect all JS into bundle.js
    path: __dirname + '/dist',         // copy bundle.js to dist
  },

  // TODO: loaders
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },

  // HTML Webpack Plugin will generate the
  // index.html that will appear in dist/ directory.
  plugins: [
    HtmlPluginConfig
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'source-map',

  watch: true
};
