import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const webpackConfig: Partial<webpack.Configuration> = {
  entry: './src/app.tsx',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'react-docgen-typescript-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: './',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'verdor',
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
      template: 'src/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '__build__')
  },
}

export default webpackConfig
