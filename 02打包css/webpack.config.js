/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-22 15:47:26
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-22 16:45:09
 */

/**
 * 配置文件
 * 所有的构建工具都是基于node.js 平台运行 模块化默认采用common.js
 */
const { resolve } = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'built.js',
		// __dirName 是nodejs的变量 代表当前文件的目录绝对路径
		path: resolve(__dirname, 'build'),
	},
	// loader 配置
	module: {
		rules: [
			// 详细的loader配置
			{
				//匹配文件
				test: /\.css$/,
				use: [
					// use 数组中loader 执行顺序，从右到左 从上到下 一次执行
					// 创建style标签，将js中的样式资源插入到进行，添加到 head中生效
					'style-loader',
					// 将css文件变成commonjs模块加载js里面内容是样式字符串
					'css-loader',
				],
			},
            {
				//匹配文件
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
                    'less-loader',
				],
			},
            {
				//匹配文件
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
                    'sass-loader',
				],
			},
		],
	},
	// 插件
	plugins: [
		// 详细的plugins配置
	],
	// 模式 production正式 development开发
	mode: 'development',
}
