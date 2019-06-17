const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Bibly',
  template: './src/index.html',
  filename: './index.html',
});

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: ['webpack/hot/dev-server', './src/index.js'],
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /.json?/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin, hotModulePlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: 'http://localhost:9000',
    contentBase: path.join(__dirname, 'assets'),
    open: false,
    lazy: false,
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
};
