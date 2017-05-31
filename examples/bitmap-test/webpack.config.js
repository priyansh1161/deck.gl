// NOTE: To use this example standalone (e.g. outside of this repository)
// delete the local development overrides at the bottom of this file
const {resolve} = require('path');

module.exports = {
  entry: {
    app: resolve('./app.js')
  }

  // module: {
  //   rules: [
  //     {
  //       // Unfortunately, webpack doesn't import library sourcemaps on its own...
  //       test: /\.js$/,
  //       use: ['source-map-loader'],
  //       enforce: 'pre'
  //     }
  //   ]
  // }
};

// DELETE THIS LINE WHEN COPYING THIS EXAMPLE FOLDER OUTSIDE OF DECK.GL
// It enables bundling against src in this repo rather than installed deck.gl module
module.exports = require('../webpack.config.local')(module.exports);
