const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [{
                test: /\.obj$/,
                use: 'file-loader',                
            },
            {
                test: /\.(gltf|glb)$/,
                use: 'file-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin()],
};