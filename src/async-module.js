/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-15 14:45:53
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-15 14:54:59
 */

function getComponent(params) {

    // 使用import 去抽离一个单独的 loadsh 的文件
	return import('lodash').then(({ default: _ }) => {
		const ele = document.createElement('div')
		ele.innerHTML = _.join(['hello', 'webpack','div'], ' ')
		return ele
	})
}


getComponent().then((element)=>{
    document.body.appendChild(element)

})