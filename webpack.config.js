// webpack.config.js

const path = require('path');

module.exports = {
  // other webpack configuration options...

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};