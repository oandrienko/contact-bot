var webpack = require('webpack');
var path = require('path');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, 'build'),
  src1: path.join(__dirname, 'client'),
  src2: path.join(__dirname, 'server')
};

module.exports = {
  target: 'node',
  entry: {
    client: ['react', PATHS.src1],
    server: [PATHS.src2]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].ContactBot.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      stylesRoot: PATHS.src1 + '/style',
      src: PATHS.src1
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: process.cwd()
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      mangle: {
        except: ['$', 'webpackJsonp']
      }
    }),
    new ExtractTextPlugin('contact_bot.css'),
    new webpack.DefinePlugin({
      "process.env": {
        // to require styles with webpack
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ],
};

