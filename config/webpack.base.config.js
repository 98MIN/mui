const nodePath = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ENTRY = nodePath.join(__dirname, '../', 'app.tsx')
const DIST_PATH = nodePath.join(__dirname, '../', 'dist')
const TEMPLATE_PATH = nodePath.join(__dirname, '../', 'public', 'index.html')

module.exports = {
  mode: 'development',
  entry: ENTRY,
  devtool: 'source-map',
  output: {
    path: DIST_PATH,
    filename: '[name].[hash].js',
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'] },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HTMLWebpackPlugin({ template: TEMPLATE_PATH })],
}
