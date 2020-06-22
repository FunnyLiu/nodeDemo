const Promise = require('./myPromise');

const fetchSomething = () =>
  new Promise((resolve, reject) => {
    //构造函数中只会执行一次
    console.log('exec');
    resolve({ code: 0 });
  });
const promise = new Promise((resolve, reject) => {
  fetchSomething().then(data => {
    resolve(data);
  });
});
promise.then(result => {
  console.log(result);
});
// 两次调用 then 方法中间留一段间隔
promise.then(result => {
  console.log(result);
});
//exec
//{code:0}
//{code:0}

promise
  .then(() => {
    throw new Error('error from me');
  })
  .catch(err => console.log(err))
  .finally(() => {
    console.log('finally');
  });
//Error: error from me
//finally

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
