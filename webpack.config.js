const path = require('path');

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const {merge} = require('webpack-merge');
const modules = require('./webpack/modules');
const devServer = require('./webpack/devServer');
const plugins = require('./webpack/plugins');
const resolves = require('./webpack/resolves');


const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index_bundle.js",
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        return merge([
          config,
          modules(),
          plugins(),
        ]);
        
    } else {
        config.mode = 'development';
        return merge([
          config,
          devServer(),
          modules(),
          plugins(),
          resolves(),
        ]);
    }
   
};
