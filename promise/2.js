let p = Promise.resolve();

p.then(() => {
  console.log("then1");
  Promise.resolve().then(() => {
    console.log("then3");
  });
}).then(() => {
  console.log("then4");
});

p.then(() => {
  console.log("then2");
});

//then1
//then2
//then3
//then4
// 每个链式调用的开端会首先依次进入微任务队列

// 如果 then 中的回调返回了一个 promise，
// 那么 then 返回的 promise 会等待这个 promise 被 resolve 后，
// 再往微任务队列推入一个任务，而这个任务的作用是 resolve 包裹这个回调的 then 方法返回的 promise

