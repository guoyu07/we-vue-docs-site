var path = require('path')

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'jquery', 'jparticles'],
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, '../src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // lourders: {
          //
          // },
          transformToRequire: {
            video: 'src',
            souce: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '../src')]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
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
  }
}
