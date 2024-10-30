const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/resources/static/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/resources/templates/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'About.html',
            template: './src/main/resources/templates/About.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'Blog.html',
            template: './src/main/resources/templates/Blog.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'Post1.html',
            template: './src/main/resources/templates/Post1.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'Post2.html',
            template: './src/main/resources/templates/Post2.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/main/resources/static/css/style.css', to: 'resources/css' },
                { from: './src/main/resources/static/img', to: 'resources/img' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};