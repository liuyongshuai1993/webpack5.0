/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘永帅
 * @Date: 2021-12-15 10:25:43
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-15 10:25:44
 */

module.exports = {
	plugins: [
		[
			//postcss-preset-env插件读取package.json文件中的browserslist配置
			require('postcss-preset-env')(),
		],
	],
}