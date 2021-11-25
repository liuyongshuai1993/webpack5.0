/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-24 13:39:13
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-25 14:27:42
 */

const { resolve } = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				// 、eslint-config-airbnb-base eslint-plugin-import eslint-loader eslint
				// 只检测源代码 自己写的代码 不检查第三方库
				// eslintconfig 配置文件
				// airbnb 规则
				// test: /\.js$/,
				// exclude: /node_modules/,
				// loader: 'eslint-loader',
				// options: {
				// 	fix: true,
				// },
			},
		],
	},
	plugins: [
		new HTMLWEBPACKPLUGIN({
			template: './src/index.html',
            collapseWhitespace: true, // 空格
            keepClosingSlash: true, // 保持单例元素的尾部斜杠
            removeComments: true,  // 注释
            removeRedundantAttributes: true, //当值与默认值匹配时删除属性。
            removeScriptTypeAttributes: true,  // type="text/javascript"从script标签中删除。其他type属性值保持不变
            removeStyleLinkTypeAttributes: true, //type="text/css"从style和link标记中删除。其他type属性值保持不变
            useShortDoctype: true // doctype用简短的 (HTML5) doctype替换
		}),
		new ESLintPlugin({
		    fix: true,
		    extensions: ['js', 'json'],
		    exclude: '/node_modules/'
		})
	],
	mode: 'development',
}
