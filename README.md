## 指定打包入口  打包模式



```
` npx webpack --entry ./src/index.js --mode production `
```

- 自动引入资源  

  ```
  npm install --save-dev html-webpack-plugin
  ```

   该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中

- 清理打包文件夹

- 搭建开发环境 

  ```
  mode: 'development'
  ```

  使用source-map 中devtools定位代码报错位置
  1.自动打包 检测文件 手动
  --watch  

   - webpack-dev-server 
      为你提供一个基本webserver 并且具有live reloading（实时重新加载）功能， 
      其实没有真正的输出任何物理的文件，把输出的打包以后的额bundle文件放到了内存里

1. 资源模块
   - 资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。

     - asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。

     - asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。

     - asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。

     - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

     - css

       ```
        use:['style-loader','css-loader','less-loader']
        const MiniCssExtractPlugin = require("mini-css-extract-plugin"); const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
       ```

     - postcss-loader 使用

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
    
     #### 自定义json模块 解析打包 三种格式 toml yaml json5
    
     ```
      npm i  toml yaml json5 -D
     
      {
          test:/\.json5$/,
          type:'json',
          parser:{
          parse:json5.parse
          }
      },
     ```
    
     ####  babel-loader 
    
     ```
     npm install -D babel-loader @babel/core @babel/preset-env   
     
     npm install -D @babel/plugin-transform-runtime @babel/runtime
     ```
    
     - babel-loader 在webpack里面应用babel解析ES6的桥梁
     - @babel-core babel的核心模块
     - @babel-env babel预设 一组babel插件的集合  整合一组插件到一个文件中
    
     #### 代码分离
    
      - 多入口
    
        ```
        entry: {
                index:'./src/index.js',
                another:'./src/another-module.js'
            }, //入口  弊端：代码重复；多个chunk打包同一样的资源
        ```
    
        多入口共享资源
    
        ```
        	entry: {
        		index: {
        			import: './src/index.js', // 导入的模块
        			dependOn: 'shared', // 定义共享的文件
        		},
        		another: {
        			import: './src/another-module.js',
        			dependOn: 'shared',
        		},
        		shared: 'lodash',
        	}, 
        ```
    
        ​	SplitChunksPlugin  使用webpack内置方法
    
        		-  最初，chunks（以及内部导入的模块）是通过内部 webpack 图谱中的父子关系关联的。`CommonsChunkPlugin` 曾被用来避免他们之间的重复依赖，但是不可能再做进一步的优化。
    
        ```
         optimization: { 
         	splitChunks: {
                    chunks: 'all',
                }
           }
        ```
    
        动态导入 dynamic import
    
        - 当涉及到动态代码拆分时，webpack 提供了两个类似的技术。第一种，也是推荐选择的方式是，使用符合 [ECMAScript 提案](https://github.com/tc39/proposal-dynamic-import) 的 [`import()` 语法](https://webpack.docschina.org/api/module-methods/#import-1) 来实现动态导入。第二种，则是 webpack 的遗留功能，使用 webpack 特定的 [`require.ensure`](https://webpack.docschina.org/api/module-methods/#requireensure)。
    
        ```
        
        // 实现懒加载效果
        - math.js 
        export const add = (x, y) => {
        	return x + y
        }
        
        - index.js
        // 懒加载 点击时加载 资源
        btn.addEventListener('click', () => {
            // 魔法注释 修改打包的文件名
        	import(/*webpackChunkName:'math'*/'./math.js').then(({ add }) => {
        		console.log(add(4, 5))
        	})
        })
        ```
    
        预获取/预加载模块 **(prefetch/preload module)**
    
        - **prefetch**(预获取)：将来某些导航下可能需要的资源
        - **preload**(预加载)：当前导航下可能需要资源
    
        ![image-20211215154826056](E:\work\GitLab\webpack\webpack5.0\src\assets\image-20211215154826056.png)
    
        并追加到页面头部，指示着浏览器在闲置时间预取 `math.bundle.js` 文件。





#### 公共路径

##### 环境变量

`npx webpack --env production`

````
npx webpack --env production --env goal=local

module.exports = (env) => {
	console.log(env)  // { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true, goal: 'local' }
	return{
		entry:{},
		mode: env.production ? 'production' : 'development',
	}
}
````

- js 代码压缩

` npm install terser-webpack-plugin --save-dev `

````
optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
}
````





` npm i webpack-merge -D`

#### 模块 解析原理

