var webpack = require('webpack')
var path = require('path')
var devServer = require('webpack-dev-server')
var opn = require('opn')

var webpackConfig = require('./webpack.config.js')

var compiler = webpack(webpackConfig)

var server = new devServer(compiler, {
  hot: true,
  historyApiFallback: false,
  contentBase: path.resolve(__dirname, '../src'),
  quiet: false,
  noInfo: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: {
    colors: true
  }
})

server.listen(8080, 'localhost', function () {
  opn('http://localhost:8080')
})
