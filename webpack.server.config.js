const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/server/server.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
        // Set __dirname to our output dist in our output
        publicPath: path.resolve(__dirname, './dist')
    },
    target:  'node',
    externals: [nodeExternals()]
};