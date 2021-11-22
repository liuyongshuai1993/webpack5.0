/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-22 17:07:43
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-22 17:38:31
 */

const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { loadavg } = require('os')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	module: {
		// loader 需要下载 ，是使用（配置 laoder
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                     //  图片大与8kb 就会被base64处理
                    limit:8*1024
                }
            }
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
}
