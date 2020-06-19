import path from 'path'
import webpack from 'webpack'
import devServer from 'webpack-dev-server'
import common from './webpack.common.config'

/**
 * webpack-dev-server所需要的配置
 */
const webpackConfig: webpack.Configuration & {
  devServer: devServer.Configuration
} = {
  ...common,
  devServer: {
    contentBase: [path.join(__dirname, '__build__'), path.join(__dirname, 'public')],
    port: 9050,
    host: 'localhost',
  },
}

export default webpackConfig
