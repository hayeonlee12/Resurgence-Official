const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/resources/static/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // ensures all resources are served from the root
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
                { from: './src/main/resources/static/img/leaf.png', to: 'resources/img' },
                { from: './src/main/resources/static/img/home.png', to: 'resources/img' },
                { from: './src/main/resources/static/img/home2.png', to: 'resources/img' },
                { from: './src/main/resources/static/img/Post1.jpg', to: 'resources/img' },
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
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/About.html/, to: '/About.html' },
                { from: /^\/Blog.html/, to: '/Blog.html' },
                { from: /^\/Post1.html/, to: '/Post1.html' },
                { from: /^\/Post2.html/, to: '/Post2.html' },
            ],
        },
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
    },
};