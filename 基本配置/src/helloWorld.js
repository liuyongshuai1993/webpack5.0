
// 使用 babel-loader 
function getString(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve('hello world!!!!!!!')
        },2000 );
    })
}

async function helloWorld(params) {
        let string = await getString()
        console.log(string)
}


export default helloWorld 
