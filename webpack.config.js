/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:14:52
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-14 10:42:45
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
	entry: './src/index.js', //入口
	output: {
		filename: 'bundle.js', // 出口文件名
		path: path.resolve(__dirname, './dist'), // 输出路径  必须式绝对路径
        clean:true //清理打包文件夹
	},
	mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        template:'./index.html', // 定义模板
        filename:'app.html', // 输出文件
        inject:'body', // 指定文件打包位置
    })],
}
