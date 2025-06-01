const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions',
                      'chrome >= 90',
                      'firefox >= 90',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
