const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/public'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            },
        ]
    },
};