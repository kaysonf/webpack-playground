const path = require('path');
const yaml = require('yamljs');

module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            //https://webpack.js.org/guides/asset-management/#loading-images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', //https://webpack.js.org/guides/asset-modules/
            },

            //https://webpack.js.org/guides/asset-management/#loading-data
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },

            //https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            }
        ],
    },
};