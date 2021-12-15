"use strict";

var _relation = _interopRequireDefault(require("./assets/relation.jpg"));

var _pangxie = _interopRequireDefault(require("./assets/pangxie.svg"));

var _hello = _interopRequireDefault(require("./assets/hello.txt"));

var _meishi = _interopRequireDefault(require("./assets/meishi.png"));

require("./style.css");

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:11:18
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-14 14:22:49
 */
var img = document.createElement('img');
img.src = _relation["default"];
document.body.appendChild(img);
var img2 = document.createElement('img');
img2.style.cssText = 'width:50px;height:50px';
img2.src = _pangxie["default"];
document.body.appendChild(img2);
var block = document.createElement('h2');
block.textContent = _hello["default"];
document.body.appendChild(block);
var img3 = document.createElement('img');
img3.style.cssText = 'width:150px;height:150px';
img3.src = _meishi["default"];
document.body.classList.add('hello');
document.body.appendChild(img3);