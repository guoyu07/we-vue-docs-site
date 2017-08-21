if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = '"development"'
}

var webpack = require('webpack')
var path = require('path')
var webpackConfig = require('./webpack.dev.conf.js')
var devServer = require('webpack-dev-server')
var opn = require('opn')

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
