var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  root: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'client/dist'),
  src: path.join(__dirname, 'client/src')
};

module.exports = {
  entry: {
    'ContactBot': ['react', PATHS.src],
    // vendor: ['react', 'react-dom', 'jquery']
  },
  target: 'node',
  output: {
    path: PATHS.dist,
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      src: PATHS.src,
      root: PATHS.root
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
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
    new webpack.DefinePlugin({
      "process.env": {
        // to require styles with webpack
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ],
};

