import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import devServer from 'webpack-dev-server'
import common from './webpack.common.config'

/**
 * webpack-dev-server所需要的配置
 */
const isProduction = process.env.NODE_ENV === 'production'
const webpackConfig: webpack.Configuration & {
  devServer: devServer.Configuration
} = {
  ...common,
  entry: './src/example.tsx',
  devServer: {
    contentBase: [path.join(__dirname, '__build__'), path.join(__dirname, 'public')],
    port: 9050,
    host: 'localhost',
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  output: {
    filename: `[name]${isProduction ? '.[hash:8]' : ''}.js`,
    chunkFilename: `[name]${isProduction ? '.[hash:8]' : ''}.chunk.js`,
    path: path.join(__dirname, '__build__'),
  },
}

export default webpackConfig
