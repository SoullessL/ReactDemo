var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/main.jsx', // 入口文件，单入口 app.jsx 文件
    output: { path: __dirname, filename: './bundle.js' }, // 编译到的文件
    module: {
        loaders: [ // 使用特定的加载器 loader 处理特定的文件
            {
                test: /\.jsx?$/, // 文件过滤规则
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'], // es2015 处理 ES6 语法，react 处理 jsx 语法
                    plugins: ["transform-class-properties"]
                }
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'node_modules/font-awesome/css',
                to: 'content/css'
            },
            {
                from: 'node_modules/font-awesome/fonts',
                to: 'content/fonts'
            }
        ])],
};
