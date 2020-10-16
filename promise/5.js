new Promise((resolve,reject)=>{
    console.log("promise1")
    resolve()
}).then(()=>{
    console.log("then1-1")
    new Promise((resolve,reject)=>{
        // 构造函数中内容是同步的
        console.log("promise2")
        resolve();
    }).then(()=>{
        console.log("then2-1")
        //当 Promise resolve 了一个 Promise 时，会产生一个 NewPromiseResolveThenableJob
        //该 Jobs 还会调用一次 then 函数来 resolve Promise，这也就又生成了一次微任务。
        return Promise.resolve()
    }).then(()=>{
        console.log("then2-2")
    }).then(()=>{
        console.log("then2-3")
    })
}).then(()=>{
    console.log("then1-2")
}).then(()=>{
    console.log("then1-3")
})

console.log("promise1")
queueMicrotask(()=>{
    console.log("then1-1");
    console.log("promise2")
    queueMicrotask(()=>{
        console.log("then2-1")
        //该 Jobs 还会调用一次 then 函数来 resolve Promise，这也就又生成了一次微任务。
        queueMicrotask(()=>{
            queueMicrotask(()=>{
                console.log("then2-2")
                queueMicrotask(()=>{
                    console.log("then2-3")
                })
            })
        })
    });
    queueMicrotask(()=>{
        console.log("then1-2")   
        queueMicrotask(()=>{
            console.log("then1-3")
        })     
    })
})

// 结果为：
// promise1
// then1-1
// promise2
// then2-1
// then1-2
// then1-3
// then2-2
// then2-3