/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-17 15:16:41
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 16:19:25
 */

/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-17 15:11:08
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 15:15:52
 */

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	output: {
		filename: 'scripts/[name][contenthash].js', // 出口文件名
		publicPath: 'http://localhost:8080/',
	},
	mode: 'production',
	// 优化配置中
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	performance: {
		hints: false, // 关闭警告
	},
}
