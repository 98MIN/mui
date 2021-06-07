const { merge } = require('webpack-merge')
const base_config = require('./webpack.base.config')

module.exports = merge(base_config, {
  mode: 'production'
})
