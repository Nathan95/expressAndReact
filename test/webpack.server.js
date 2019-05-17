const path = require('path');
const dev = process.env.NODE_ENV !== "production";
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: dev ? "development" : "production",
  target: 'node',
  entry: './server.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
             presets: ['react', 'es2015'],
             plugins: ['transform-class-properties']
           }
        },
    ],
  },
  externals: [webpackNodeExternals()]
}
