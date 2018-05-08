var path = require('path');
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env'],
            ['react']
          ]
        }
      },

    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader" 
      }, {
        loader: "css-loader"
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
  watch: true

};
