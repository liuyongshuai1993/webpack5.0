/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 15:11:49
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-23 15:48:48
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(css|less|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 1000,
					esModule: false,
				},
				type: 'javascript/auto',
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				// 不包括以下几个
				exclude: /\.(css|less|scss|js|png|jpg|gif|html)$/,
				// 打包为其他资源
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	mode: 'development',
	devServer: {
		static: {
			directory: resolve(__dirname, 'build'),
		},
		compress: true,
		port: 4444,
		open: true,
	},
}
