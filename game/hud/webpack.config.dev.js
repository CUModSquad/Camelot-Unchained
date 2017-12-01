const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const WriteFilePlugin  = require('write-file-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  output: {
    hotUpdateChunkFilename: 'hot-update.js',
    hotUpdateMainFilename: 'hot-update.json'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new WriteFilePlugin(),
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'build'), path.join(__dirname, 'src')],
    compress: true,
    hot: true,
    port: 9003,
  }
});
