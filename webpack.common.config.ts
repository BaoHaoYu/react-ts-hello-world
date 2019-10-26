import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const webpackConfig: Partial<webpack.Configuration> = {
  entry: {
    main: ['./src/app/app'],
  },
  output: {
    filename: '[name].js',

    path: '__build__',
  },
  module:{
    rules:[
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
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(
          process.env.NODE_ENV,
        ),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ]
}

export default webpackConfig
