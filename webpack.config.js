/*
* @Author: Jake Brukhman
* @Date:   2016-11-14 14:02:00
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2016-11-14 14:10:30
*/

'use strict';

module.exports = {

  entry: './app/index.js',

  output: {
    filename: 'bundle.js',             // collect all JS into bundle.js
    path: __dirname + '/dist',         // copy bundle.js to dist
  },

  module: {
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
 watch: true
};
