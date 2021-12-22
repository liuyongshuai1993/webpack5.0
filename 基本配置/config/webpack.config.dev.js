/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-17 15:11:08
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 16:18:13
 */

module.exports = {
	output: {
		filename: 'scripts/[name][contenthash].js', // 出口文件名
	},
	mode: 'development',
	devtool: 'inline-source-map', // 提示出报错位置
	devServer: {
		// webpack-dev-server
		static: './dist',
	},
}
