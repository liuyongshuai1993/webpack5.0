1. 指定打包入口  打包模式
    ` npx webpack --entry ./src/index.js --mode production `

2. 自动引入资源  
 ` npm install --save-dev html-webpack-plugin `
 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中

3. 清理打包文件夹

4. 搭建开发环境 
    ` mode: 'development', `
    使用source-map 中devtools定位代码报错位置
    1.自动打包 检测文件 手动
    --watch  
    
       - webpack-dev-server 
          为你提供一个基本webserver 并且具有live reloading（实时重新加载）功能， 
      其实没有真正的输出任何物理的文件，把输出的打包以后的额bundle文件放到了内存里
    
5. 资源模块
   - 资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。
     1. asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。

     2. asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。

     3. asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。

     4. asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
       6.css
       ` use:['style-loader','css-loader','less-loader']`
       ` const MiniCssExtractPlugin = require("mini-css-extract-plugin"); const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");`

       postcss-loader 使用

       ` npm install postcss-loader postcss postcss-preset-en -D`

       在webpack.config.js

       ```json
       	
       module: {
       		rules: [
       			//处理css
       			{
       				test: /\.css$/,
       				use: [
       					'style-loader',
       					'css-loader',
       					'postcss-loader', //
       				],
       			},
        
       		
       	},
       
       ```
       新建文件 postcss.config.js
       子根目录下创建文件 


       ```json
       module.exports = {
       	plugins: [
       		[
       			//postcss-preset-env插件读取package.json文件中的browserslist配置
       			require('postcss-preset-env')(),
       		],
       	],
       };
       ```

       package.json

       ```json
         "browserslist": [
       		"> 1%",
       		"last 2 versions",
       		"not ie <= 8"
       	],
       ```

       