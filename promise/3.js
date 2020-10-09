let p = Promise.resolve().then(() => {
    console.log("then1");
    Promise.resolve().then(() => {
      console.log("then2");
    });
  }).then(() => {
    console.log("then3");
  });
  
  p.then(() => {
    console.log("then4");
  });
  //then1
  //then2
  //then3
  //then4
  //前面提到：每个链式调用的开端会首先依次进入微任务队列
  //然而上述代码其实有个陷阱，then 每次都会返回一个新的 Promise，
  //此时的 p 已经不是 Promise.resolve() 生成的，而是最后一个 then 生成的
