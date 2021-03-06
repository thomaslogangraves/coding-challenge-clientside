var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      include: path.join(__dirname, 'src'),
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },{
      test: /\.(png|jpg|gif)$/,
      loader: "file-loader?name=img/img-[hash:6].[ext]"
    },{
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
    }]
  }
};
