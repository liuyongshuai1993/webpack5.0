/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:11:18
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-14 14:22:49
 */

import ImgSrv from './assets/relation.jpg'
import SvgSrc from './assets/pangxie.svg'
import helloTxt from './assets/hello.txt'
import pngSrc from './assets/meishi.png'
import  "./style.css";
import  "./style.less";





const img = document.createElement('img')
img.src = ImgSrv
document.body.appendChild(img)


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
