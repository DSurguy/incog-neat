// const path = require('path');

// module.exports = {
//   entry: './client/app.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'server/public')
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['env']
//           }
//         }
//       },
//       {
//         test: /\.(html)$/,
//         use: {
//           loader: 'html-loader',
//           options: {
//             attrs: [':data-src']
//           }
//         }
//       }
//     ]
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "server/public"),
//     compress: true,
//     port: 9000
//   }
// };

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'server/public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/app.jsx',
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
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