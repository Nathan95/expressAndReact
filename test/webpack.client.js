const path = require('path');
const dev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: dev ? "development" : "production",
  target: 'node',
  entry: './src/client.js',
  output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname, 'build/public'),
      publicPath: '/build/public'
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
    ]
  }
}
