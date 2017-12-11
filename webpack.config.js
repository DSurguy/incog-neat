let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'server/public');
let APP_DIR = path.resolve(__dirname, 'client');

let config = {
  entry: APP_DIR + '/app.jsx',
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "server/public"),
    compress: true,
    port: 9010,
    historyApiFallback: true
  }
};

module.exports = config;