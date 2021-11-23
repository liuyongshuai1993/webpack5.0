/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 14:22:36
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-23 14:50:39
 */

const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	module: {
		// loader 需要下载 ，是使用（配置 laoder
		rules: [
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
	plugins: [
		// 创建一个空的html 自动引入打包输出的所有资源
		new htmlWebpackPlugin({
			//  复制这个文件，自动引入
			template: './src/index.html',
		}),
	],
	mode: 'development',

	// 启动指令 npx webpack-dev-server
	devServer: {
		static: {
			directory: resolve(__dirname, 'public'),
		},
		compress: true,
		port: 4044,
		open: true,
	},
}
