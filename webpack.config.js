const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    },

    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};