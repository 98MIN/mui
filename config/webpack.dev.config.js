const { merge } = require('webpack-merge')
const base_config = require('./webpack.base.config')

module.exports = merge(base_config, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
    open: true,
  },
})
