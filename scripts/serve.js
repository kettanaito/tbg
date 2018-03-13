const webpack = require('webpack');
const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

webpackConfig.entry.push(
  'webpack-hot-middleware/client'
);
const compiler = webpack(webpackConfig);

browserSync.init({
  server: './',
  middleware: [
    new webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      hotOnly: true,
      stats: {
        colors: true
      }
    }),
    new webpackHotMiddleware(compiler)
  ]
});
