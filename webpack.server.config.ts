import * as webpack from 'webpack'
import * as devserver from 'webpack-dev-server'
import common from './webpack.common.config'
import path from 'path'

const webpackConfig: webpack.Configuration & {
  devServer: devserver.Configuration
} = {
  devServer: {
    contentBase: path.join(__dirname, '__build__'),
    port: 9000,
    host: 'localhost',
  },
  mode: 'development',
  ...common,
}

export default webpackConfig
