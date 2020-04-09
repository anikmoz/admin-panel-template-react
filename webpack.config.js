const webpack = require('webpack');


const mode = process.env.NODE_ENV || 'production';

const S_PATH = __dirname + '/public/src';


module.exports = {
  mode: mode,
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  entry : ['regenerator-runtime/runtime', S_PATH],
  output: {
    path : __dirname + '/public' + '/static/js',
    filename : 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/], // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the `node_modules folder`
        include: S_PATH,

        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties'
              ]
            }

          },

        ]
      }
    ]
  }
};



