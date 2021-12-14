  /** 
   * 入口
   *  开发话环境打包 webpack ./src/index.js -o ./build --mode=development  
   *  开发话环境打包 webpack ./src/index.js -o ./build --mode=production  
   *   webpack 只能打包js json 资源
  */

  function add(x, y){

    return x + y

  }
  console.log(add(1,1))