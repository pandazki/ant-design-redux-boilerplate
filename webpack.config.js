const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, './src/client/index.jsx')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    chunkFilename: 'js/[name].[hash].js',
    filename: 'js/[name].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'ant-design-redux',
      template: path.resolve(__dirname, './src/server/index.html'),
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.less?$/,
      loaders: [ExtractTextPlugin.extract('style'), 'css', 'less'],
      include: __dirname
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: ['url?limit=8192&name=img/[name].[ext]'],
      exclude: /node_modules/
    }]
  }
};
