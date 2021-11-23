/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-22 17:07:43
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-23 10:27:02
 */

const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { loadavg } = require('os')
const { javascript } = require('webpack')

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
                // 处理不了html中img图片
				test: /\.(png|jpg|gif)$/i,
				loader: 'url-loader',  // 依赖file-loader
                // 如需从 asset loader 中排除来自新 URL 处理的 asset，请添加 dependency: { not: ['url'] } 到 loader 配置中
                // dependency: { not: ['url'] },
				options: {
					//  图片大与8kb 就会被base64处理
					limit: 8192,
                    // 关闭es6模块化 使用commonjs解析
					esModule: false,
				},
                //webpack5.0 当在 webpack 5 中使用旧的 assets loader（如 file-loader/url-loader/raw-loader 等）和 asset 模块时，
                // 你可能想停止当前 asset 模块的处理，并再次启动处理，这可能会导致 asset 重复，
                // 你可以通过将 asset 模块的类型设置为 'javascript/auto' 来解决。
				type: 'javascript/auto',
			},
            {
                // 使用规则  commonjs解析  引入img 交由url-loader进行处理
                test:/\.html$/,
                loader:'html-loader',
                
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
