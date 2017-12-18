let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'server/public');
let APP_DIR = path.resolve(__dirname, 'client');

let AppCSS = new ExtractTextPlugin('app.css');
let VendorCSS = new ExtractTextPlugin('vendor.css');

let config = {
  entry: {
    app: `${APP_DIR}/index.jsx`,
    vendor: `${APP_DIR}/vendor/index.js`
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: VendorCSS.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader'
        })
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: AppCSS.extract({
          fallback: 'style-loader?sourceMap',
          use: [
            'css-loader?importLoaders=1',
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  plugins: [
    VendorCSS,
    AppCSS
  ],
  devServer: {
    contentBase: path.join(__dirname, "server/public"),
    compress: true,
    port: 9010,
    historyApiFallback: true
  }
};

module.exports = config;