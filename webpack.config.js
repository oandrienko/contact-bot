var webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  output: {
    path: PATHS.dist,
    filename: '[name].js'
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
        ignore: /node_module/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=react-hmre'],
      }
    ]
  },
  plugins: [
    //for HMR in dev-server
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only'
  },
  devtool: 'source-map'
};
