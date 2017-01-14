const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const args = process.argv.slice(2);
const isProd = args.indexOf('-p') !== -1;
const port = 8000;

const rootPath = __dirname;
const PATHS = {
    root: rootPath,
    app: path.join(rootPath, 'src'),
    styles: path.join(rootPath, 'scss/styles.scss'),
    build: path.join(rootPath, 'lib'),
    test: path.join(rootPath, 'test')
};

module.exports = {

    devtool: isProd ? false : 'source-map',

    entry: {
        'index': isProd ? PATHS.app : PATHS.test + '/dev',
        'styles': PATHS.styles
    },

    output: {
        filename: '[name].js',
        path: PATHS.build,
        libraryTarget: isProd ? 'commonjs2' : undefined
    },

    externals: (function() {
        return isProd ? {
                'react': 'commonjs react',
                'react-modal': 'commonjs react-modal'
            } : {};
    })(),

    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'].concat(!isProd ? ['react-hmre'] : []),
                        plugins: [
                            'transform-class-properties',
                            'transform-object-rest-spread',
                            'transform-decorators-legacy'
                        ].concat(!isProd ? ['react-hot-loader/babel'] : [])
                    }
                }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })

            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=loader.[ext]'
                ]
            }
        ]
    },

    plugins: []
        .concat(!isProd ? [

            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'test/index.html'
            }),

            new webpack.HotModuleReplacementPlugin(),

            new webpack.DefinePlugin({
                'process.env': {
                    BROWSER: JSON.stringify(true),
                    NODE_ENV: JSON.stringify('development')
                }
            }),

        ] : [])
        .concat(isProd ? [

            new CleanWebpackPlugin([PATHS.build], {
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

        ] : [])
        .concat([

            new ExtractTextPlugin(`[name].css`),

        ]),

    resolve: {
        modules: [
            path.join(rootPath, 'node_modules')
        ],
        alias: {
            contactModal: PATHS.app
        },
        extensions: ['.js', '.jsx', 'scss', '.json']
    }
};
