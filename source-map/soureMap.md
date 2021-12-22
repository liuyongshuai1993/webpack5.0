<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘永帅
 * @Date: 2021-12-17 16:59:58
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-17 17:19:34
-->

没有配置sourceMap

- 默认值 eval 代码定位会在app.js中
- false 代码定位 main.js  打包的文件中
- source-map 生产一个SourceMap文件

```` 
 //# sourceMappingURL=main.js.map     

````

- hidden-source-map
和source-map一样 但不会生成在main末尾追加注释 不能锁定代码行数

- inline-source-map  
生成一个dataUrl 形式的SourceMap； 不会新建新的SourceMap文件

- eval-source-map  
代码定位会在app.js中；生成一个dataUrl 形式的SourceMap 放在eval的后面 ； 不会新建新的SourceMap文件

- cheap-source-map
代码定位会在app.js中； main.js.map mappings中打包之后源码 只记行数 没有列信息

- cheap-moudule-source-map