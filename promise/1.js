Promise.resolve()
  .then(() => {
    console.log("then1");
    Promise.resolve().then(() => {
      console.log("then2");
    });
  })
  .then(() => {
    console.log("then3");
  });
  //then1
  //then2
  //then3

//链式调用中，只有前一个 then 的回调执行完毕后，跟着的 then 中的回调才会被加入至微任务队列。



