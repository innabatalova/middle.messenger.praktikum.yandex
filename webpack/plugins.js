const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
    return {
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
    };
};