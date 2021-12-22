/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-17 16:24:00
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 16:30:16
 */

const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common')
const prodConfig = require('./webpack.config.prod')
const devConfig = require('./webpack.config.dev')

module.exports = (env) => {
    console.log(17, env)
	switch (true) {
		case env.development:
			return merge(commonConfig, devConfig)
		case env.production:
			return merge(commonConfig, prodConfig)
		default:
			return new Error('No merge')
	}
}
