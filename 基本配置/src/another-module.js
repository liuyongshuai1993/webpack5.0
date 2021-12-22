/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘永帅
 * @Date: 2021-12-15 14:18:03
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-15 14:25:41
 */


// 代码分离 测试

import _ from 'lodash'

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]