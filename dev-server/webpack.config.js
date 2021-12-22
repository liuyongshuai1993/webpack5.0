/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-20 13:38:52
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-20 15:19:54
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		hot: true,
		liveReload: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
}
