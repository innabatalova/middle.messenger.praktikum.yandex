const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == 'production';



const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index_bundle.js",
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./static/index.html",
          filename: "index.html",
          inject: "body",
        }),
        new CopyPlugin({
          patterns: [{ from: "src", to: "dist" }],
        }),
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].scss",
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "babel-loader",
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: "file-loader",
                options: {
                name: 'img/[name].[ext]',
                },
            },

    
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '...'],
        alias: {
            'handlebars' : 'handlebars/dist/handlebars.js'
        },
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
