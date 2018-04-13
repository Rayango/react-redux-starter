const path = require('path');
const dist_dir = path.join(__dirname, 'client/dist');
const src_dir = path.join(__dirname, 'client/src');

const config = {
  entry: './client/src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: src_dir,
        loader: 'babel-loader' 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: dist_dir
  }
};

module.exports = config;