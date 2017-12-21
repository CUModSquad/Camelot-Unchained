const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
};

const envStringified = {
  'process.env': Object.keys(env).reduce((e, key) => {
    e[key] = JSON.stringify(env[key]);
    return e;
  }, {}),
};

const config = {
  entry: {
    app: ['react-hot-loader/patch', './src/index.tsx'],
    vendor: [
      'react-hot-loader/patch',
      'lodash',
      'react',
      'react-dom',
      'jquery',
      'es6-promise',
      'camelot-unchained',
      'react-draggable',
      'react-redux',
      'react-select',
      'redux',
      'redux-thunk',
      './src/gqlDocuments.ts',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/hud.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react': path.dirname(
        require.resolve('react/package.json')
      ),
    },
    extensions: ['.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[ext]',
            },
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('cache-loader'),
              },
              {
                loader: require.resolve('thread-loader'),
                options: {
                    workers: require('os').cpus().length - 1,
                },
              },
              {
                loader: require.resolve('babel-loader'),
                options: {
                  cacheDirectory: true
                },
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                  happyPackMode: true,
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: require.resolve('style-loader'),
              },
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  sourceMap: true
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        'last 4 versions',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ]
                },
              },
              {
                loader: 'resolve-url-loader',
              },
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/, /\.tsx?$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      tslint: true,
      formatter: 'codeframe',
      async: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/lib.js'
    }),
    new webpack.DefinePlugin(envStringified),
    new InterpolateHtmlPlugin(env),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'hud.html',
      template: 'src/hud.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: 'asset-stats.json',
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    dns: 'empty',
  },
  performance: {
    hints: false,
  },
};

module.exports = config;
