<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:09:33
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-14 10:43:11
-->

1. 指定打包入口  打包模式
  ` npx webpack --entry ./src/index.js --mode production `

2. 自动引入资源  
 ` npm install --save-dev html-webpack-plugin `
 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中

3. 清理打包文件夹

4. 搭建开发环境 
    ` mode: 'development', `

