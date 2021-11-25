/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-23 16:14:30
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-24 10:40:44
 */

const { resolve } = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
                                plugins: [require('postcss-preset-env')()]
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
        new OptimizeCssAssetsPlugin()
	],
}
