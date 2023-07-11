const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML files for your entry points
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'],
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/install.html',
        chunks: ['install'],
        filename: 'install.html',
      }),
      // Generate a manifest file for your Progressive Web App (PWA)
      new WebpackPwaManifest({
        name: 'My App',
        short_name: 'App',
        description: 'My awesome app',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      // Inject the service worker script into your HTML files
      new InjectManifest({
        swSrc: './src/js/service-worker.js',
        swDest: 'service-worker.js',
        exclude: [/\.map$/, /manifest\.json$/],
      }),
    ],
    module: {
      rules: [
        // Add CSS loaders and Babel configuration if needed
        // For example, if you want to process CSS and SCSS files:
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // Add Babel configuration for JavaScript files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
