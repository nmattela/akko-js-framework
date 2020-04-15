const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
    entry: {
        bundle: './src/index.js',
        'AsyncComponentDelegator.worker': './node_modules/akko-js/AsyncComponentDelegator.worker.js',
        'CompositeComponentDelegator.worker': './node_modules/akko-js/CompositeComponentDelegator.worker.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            {from: './public', to: '.'}
        ])
    ],
    output: {
        filename: '[name].js'
    }
};