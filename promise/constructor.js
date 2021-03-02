//利用promise构造函数内只执行一次的特性，来完成多次调用时只回调一次的功能

const FecthSomething = () => new Promise((resolve,reject)=>{
      //构造函数中只会执行一次
      //只处理一次的事情在这里书写即可。
      console.log('exec')
      //正常返回
      resolve({code:0});
  })
  const promise = new Promise((resolve, reject) => {
    return FecthSomething().then(data=>{resolve(data)})
  })
  
  
  promise.then((result) => {
    console.log(result)
  })
  
  promise.then((result) => {
    console.log(result)
  })
  //exec
  //{code:0}
  //{code:0}