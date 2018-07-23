const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonConfig = {
    devtool: 'source-map'
};

const rendererConfig = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
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
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: './index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            GoldenLayout: 'golden-layout'
        })
    ]
};

module.exports = env => {
    var production = env.production || false;
    if (production) {
        rendererConfig.mode = 'production';
    } else {
        rendererConfig.mode = 'development';
    }
    return merge(commonConfig, rendererConfig);
}