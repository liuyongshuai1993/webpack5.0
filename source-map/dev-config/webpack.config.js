/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-17 16:50:38
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-20 13:33:59
 */

const HtmlaWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app.js',
	mode: 'production',
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	// devtool: 'cheap-source-map',
	plugins: [new HtmlaWebpackPlugin()],
}
