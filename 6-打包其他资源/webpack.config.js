/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 13:42:37
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-23 13:56:44
 */

const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const loader = require('sass-loader')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				exclude: /\.(css|js|html)$/,
				// 打包为其他资源
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './index.html',
		}),
	],
	mode: 'development',
}
