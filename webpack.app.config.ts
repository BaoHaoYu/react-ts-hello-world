import * as webpack from 'webpack'
import common from './webpack.common.config'

/**
 * 生产环境编译所需要webpack配置
 */
const webpackConfig: webpack.Configuration = {
  ...common,
  mode: 'production',
}

export default webpackConfig
