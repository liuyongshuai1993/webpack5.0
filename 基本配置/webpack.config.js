/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:14:52
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 14:19:15
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')
const path = require('path')

module.exports = (env) => {
	console.log(20, env)
	return {
		entry: {
			//多入口
			index: './src/index.js',
			another: './src/another-module.js',
		},

		output: {
			filename: 'scripts/[name][contenthash].js', // 出口文件名
			path: path.resolve(__dirname, './dist'), // 输出路径  必须式绝对路径
			clean: true, //清理打包文件夹
			assetModuleFilename: 'images/[contenthash][ext]', // 设置资源路径文件名
			publicPath: 'http://localhost:8080/',
		},
		mode: env.production ? 'production' : 'development',
		devtool: 'inline-source-map', // 提示出报错位置
		devServer: {
			// webpack-dev-server
			static: './dist',
		},
		module: {
			rules: [
				{
					test: /\.(png|jpg|gif)$/i,
					type: 'asset/resource',
					generator: {
						// 优先级 高于output中assetModuleFilename
						filename: 'images/[contenthash][ext]',
					},
				},
				{
					test: /\.(svg)$/i, // 导出一个资源的 data URI
					type: 'asset/inline',
				},
				{
					test: /\.(txt)$/i, // 导出一个资源的 data URI
					type: 'asset/source',
				},
				{
					test: /\.png$/i, // 通用选择 根据资源大小
					type: 'asset',
					parser: {
						dataUrlCondition: {
							maxSize: 4 * 1024 * 1024, // 4kb
						},
					},
				},
				{
					test: /\.(css|less)$/i,
					// 链式 从后至前；链式调用；链式的每一个loader都可以对我们的源进行转换  逆序的
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						'less-loader',
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/source',
				},
				{
					test: /\.toml$/,
					type: 'json',
					parser: {
						parse: toml.parse,
					},
				},
				{
					test: /\.yaml$/,
					type: 'json',
					parser: {
						parse: yaml.parse,
					},
				},
				{
					test: /\.json5$/,
					type: 'json',
					parser: {
						parse: json5.parse,
					},
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/, // 忽略文件
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: [['@babel/plugin-transform-runtime']],
						},
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html', // 定义模板
				filename: 'app.html', // 输出文件
				inject: 'body', // 指定文件打包位置
			}),
			new MiniCssExtractPlugin({
				filename: 'styles/build.css',
			}),
		],
		// 优化配置中
		optimization: {
			minimize: true,
			minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],

			// 开箱即用 多入口配置 代码抽离
			splitChunks: {
				cacheGroups: {
					defaultVendors: {
						// 浏览器缓存node包  缓存第三方库
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
						priority: -10,
						reuseExistingChunk: true,
					},
				},
				// chunks: 'all',
			},
		},
	}
}
