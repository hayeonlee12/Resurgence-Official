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
            filename: 'about.html',
            template: './src/main/resources/templates/about.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/main/resources/templates/blog.html',
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