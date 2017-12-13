let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'server/public');
let APP_DIR = path.resolve(__dirname, 'client');

let config = {
  entry: [`${APP_DIR}/app.jsx`, `${APP_DIR}/app.scss`],
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use: 'babel-loader'
      },
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin(`bundle.css`)
  ],
  devServer: {
    contentBase: path.join(__dirname, "server/public"),
    compress: true,
    port: 9010,
    historyApiFallback: true
  }
};

module.exports = config;