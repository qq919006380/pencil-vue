// 压缩插件，压缩ES6的语法不会报错，uglifyjs会报错(3.0版本支持)
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: "none",
    entry: {
        'pencil': path.resolve(__dirname, '../packages/index.js'),
        'pencil.min': path.resolve(__dirname, '../packages/index.js')
    },
    output: {
        filename: '[name].js',
        library: 'pencil', // 指定库的名称，及库的全局变量
        libraryTarget: 'umd', // 支持库引入的方式
        libraryExport: 'default'
    },
    module: { // 用来配置第三方loader模块的  
        rules: [ // 文件的匹配规则 
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader' },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};
