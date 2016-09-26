var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',// necessary for hot reloading with IE:
    'webpack-hot-middleware/client',// listen to code updates emitted by hot middleware:
    path.resolve(__dirname, '../src/components/app.js'),
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'js/[name].[hash].js'
  },
  plugins: [
    //剥离公共的js
    new webpack.optimize.CommonsChunkPlugin('js/comm.js'),
    //剥离公共的css
    new ExtractTextPlugin('/css/index.css'),

    //这个使用uglifyJs压缩你的js代码
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),

    //hot update
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    //生成html文件，自动引用入口js文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          env: {
            development: {
              presets: ["react-hmre"]
            }
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url?limit=1024&name=imgs/[name]_[hash:7].[ext]'
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    //自动扩展文件后缀名，require模块可以省略不写后缀名
    extensions: ['', '.js', '.json', '.scss'],
    //模块别名定义
    alias: {
      // AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
    }
  }
};