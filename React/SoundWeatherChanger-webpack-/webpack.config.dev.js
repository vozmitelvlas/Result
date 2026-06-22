const path = require('path');
const { merge } = require('webpack-merge')
const commonConfig = require("./webpack.config.common")
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins: [new ESLintPlugin(
        {
            failOnError: false,
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            exclude: ['node_modules'],
        }
    ),],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 3000,
    },
})