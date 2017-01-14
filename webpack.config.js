var webpack = require('webpack');
var path = require('path');

const PATHS = {
  dist: path.join(__dirname, 'build'),
  src1: path.join(__dirname, 'client'),
  src2: path.join(__dirname, 'server')
};

module.exports = {
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
