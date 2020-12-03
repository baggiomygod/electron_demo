import path from 'path'
import { Configuration } from 'webpack'
import devConfig from './dev.config'
import webpackConfigBase from './webpack.config.base'

const { dist, mainSource: appPath } = devConfig

const webpackConfig: Configuration = {
  ...webpackConfigBase,
  target: 'electron-main',

  entry: {
    main: path.join(appPath, 'index.ts'),
  },

  output: {
    path: path.join(dist, 'main'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /(?<!\.d)\.ts$/,
        loader: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}

export default webpackConfig
