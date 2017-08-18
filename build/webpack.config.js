var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['jquery', 'jparticles'],
    index: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server', './src/index.js'],
    docs: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server', './src/docs.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/asstes',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loaders: ['file-loader', 'img-loader']
      },
      {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      filename: '[name].js',
      minChunks: 1
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comporess: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  target: 'web'
}
