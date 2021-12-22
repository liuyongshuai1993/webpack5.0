/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-11-24 13:40:24
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-11-25 15:37:23
 */

const add = (x, y) => x + y

console.log(add(1, 2))

const promise = new Promise((reslove) => {
	setTimeout(() => {
		console.log('reslove')
		reslove()
	}, 1000)
})

console.log(promise)
