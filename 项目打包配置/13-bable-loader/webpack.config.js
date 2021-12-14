/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-24 13:39:13
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-25 15:58:57
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
				// js 兼容处理 babel-loader @babel/core核心包  @babel/preset-env
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					//  预设 执行babel做怎样的兼容性处理
					// 只能转 基本语法 const 箭头函数
					// @babel/polyfill 全部引用 体积大
					// 按需加载 corejs
					presets: [
						[
							'@babel/preset-env',
							{
								useBuiltIns: 'usage',
								corejs: {
									version: 3,
								},
							},
						],
					],
				},
			},
		],
	},
	plugins: [
		new HTMLWEBPACKPLUGIN({
			template: './src/index.html',
			collapseWhitespace: true, // 空格
			keepClosingSlash: true, // 保持单例元素的尾部斜杠
			removeComments: true, // 注释
			removeRedundantAttributes: true, //当值与默认值匹配时删除属性。
			removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。其他type属性值保持不变
			removeStyleLinkTypeAttributes: true, //type="text/css"从style和link标记中删除。其他type属性值保持不变
			useShortDoctype: true, // doctype用简短的 (HTML5) doctype替换
		}),
		// new ESLintPlugin({
		// 	fix: false,
		// 	extensions: ['js', 'json'],
		// 	exclude: '/node_modules/',
		// }),
	],
	mode: 'production',
}
