import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'

const webpackConfig: webpack.Configuration = {
  entry: {
    main: ['./src/app/index.tsx'],
  },
  mode: process.env.NODE_ENV,
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.app.json',
      }),
    ],
    ...resolve,
  },
  output,
  devtool: false,
  module: {
    rules: rules(true),
  },
  optimization,
  plugins,
}

export default webpackConfig
