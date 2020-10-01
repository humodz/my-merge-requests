/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { resolve } = require('path');
const { randomBytes } = require('crypto');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'bundle': resolve('src/main.js'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html' },
        { from: 'assets', to: 'assets' },
        { from: 'src/css', to: 'css' },
        { from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'vendor' },
      ],
    }),
  ],
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 9000
  },
};

