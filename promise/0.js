//请写出输出内容
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
//其中微任务部分对标：
// console.log('script start');
// console.log('async1 start');
// console.log('async2');
// queueMicrotask(()=>{
//     console.log('async1 end');
// });
// console.log('promise1');
// queueMicrotask(()=>{
//     console.log('promise2');
// });
// console.log('script end');



// 输出结果为：
/*
    script start
    async1 start
    async2
    promise1
    script end
    async1 end
    promise2
    setTimeout
*/
// 异步任务分为宏任务和微任务。

// 宏任务一般是：包括 script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)

// 微任务：原生 Promise(有些实现的 promise 将 then 方法放到了宏任务中)、process.nextTick、Object.observe(已废弃)、 MutationObserver 记住就行了。

// 一个EventLoop只有一个宏任务和一组微任务列表。

// 在当前的微任务没有执行完成时，是不会执行下一个宏任务的。

//Promise中的异步体现在 then 和 catch 中，所以写在 Promise 构造函数中的代码是被当做同步任务立即执行的。

// 对于 async/await 来说，await 是一个让出线程的标志。await 后面的表达式会先执行一遍，
// 将 await 后面的代码加入到 microtask 中，然后就会跳出整个 async 函数来执行后面的代码。
// 也就是说：

// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
//   //等价于

//   async function async1() {
//     console.log("async1 start");
//     Promise.resolve(async2()).then(() => {
//       console.log("async1 end");
//     });
//   }
