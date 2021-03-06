const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.(pdf|jpg|png|svg|gif|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/': {
        target: {
          host: 'localhost',
          protocol: 'http',
          port: 8000,
        },
        secure: false,
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/client/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
