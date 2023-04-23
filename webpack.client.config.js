const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/public'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
};