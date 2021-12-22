/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:11:18
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-15 15:56:15
 */

import ImgSrv from './assets/relation.jpg'
import SvgSrc from './assets/pangxie.svg'
import helloTxt from './assets/hello.txt'
import pngSrc from './assets/meishi.png'
import './style.css'
import './style.less'
import json5 from './assets/hello.json5'
import helloWorld from './helloWorld'
import './async-module.js'

import _ from 'lodash'

var array = [1]
var other = _.concat(array, 2, [3], [[4]])

console.log(other)
// => [1, 2, 3, [4]]

console.log(array)
// => [1]

helloWorld()
const img = document.createElement('img')
img.src = ImgSrv
document.body.appendChild(img)
console.log(json5, 'json5')

const img2 = document.createElement('img')
img2.style.cssText = 'width:50px;height:50px'
img2.src = SvgSrc

document.body.appendChild(img2)

const block = document.createElement('h2')
block.textContent = helloTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width:150px;height:150px'
img3.src = pngSrc

document.body.classList.add('hello')

document.body.appendChild(img3)

const btn = document.createElement('button')
btn.textContent = '点击事件'
// 懒加载 点击时加载 资源
btn.addEventListener('click', () => {
    // 魔法注释 修改打包的文件名 webpackPreload   webpackPrefetch
	import(/*webpackChunkName:'math', webpackPrefetch : true*/'./math.js').then(({ add }) => {
		console.log(add(4, 5))
	})
})
document.body.appendChild(btn)
