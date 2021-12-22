/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 16:14:30
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-23 16:27:41
 */

const { resolve } = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css/,
                // 取代style loader 提取js中css成为单独文件 通过link 引入
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new HTMLWEBPACKPLUGIN({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
            // 对输入的css文件重新命名
            filename:'css/build.css'
        }),
	],
}
