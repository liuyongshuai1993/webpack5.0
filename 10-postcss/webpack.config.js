/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 16:14:30
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-24 10:22:38
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
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
                                // 或者将插件引入写在单独的配置js中
                                //   
								// config: POSTCSSCONFIG,
                                // 版本5.0配置
                                plugins: [require('postcss-preset-env')()]
                                // 版本4.0配置
								// plugins: () => [
                                //     // 帮助postcss 找到 package.json中 browserslist里面的配置，通过配置加载指定的css兼容性样式 
								// 	require('postcss-preset-env')(),
								// ],
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new HTMLWEBPACKPLUGIN({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			// 对输入的css文件重新命名
			filename: 'css/build.css',
		}),
	],
}
