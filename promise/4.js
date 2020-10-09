new Promise((resolve,reject)=>{
    console.log("promise1")
    resolve()
}).then(()=>{
    console.log("then1-1")
    new Promise((resolve,reject)=>{
        // 构造函数中内容是同步的
        console.log("promise2")
        //意味这当前promise已经resolved
        resolve()
        // 跳到下面关键的第四步
    }).then(()=>{
        console.log("then2-1")
    }).then(()=>{
        console.log("then2-2")
    })
}).then(()=>{
    console.log("then1-2")
})
// 其实就对标：
// console.log("promise1")
// queueMicrotask(()=>{
//     console.log("then1-1");
//     console.log("promise2")
//     queueMicrotask(()=>{
//         console.log("then2-1")
//         queueMicrotask(()=>{
//             console.log("then2-2")
//         })
//     });
//     queueMicrotask(()=>{
//         console.log("then1-2")        
//     })
// })
/*
运行结果：
promise1
then1-1
promise2
then2-1
then1-2
then2-2
*/ 

//第一个外层then的状态为resolve时，先把自身then加入队列，才会调用第二个外层then

// 1、外层promise执行，打印promise1，把then1-1追加到microtasks，此时microtasks为[then1-1] 
// 2、外层then1-1中的回调函数执行，打印then1-1，此时microtasks为[] 
// 3、内层promise执行，打印promise2，把then2-1追加到microtasks，此时microtasks为[then2-1] 
// 4、外层then1-1执行结束，把then1-2追加到microtasks，此时microtasks为[then2-1, then1-2] 
// 5、内层then2-1中的回调函数执行，打印then2-1，把then2-2追加到microtasks，此时microtasks为[then1-2, then2-2] 
// 6、外层then1-2中的回调函数执行，打印then1-2，此时microtasks为[then2-2] 
// 7、内层then2-2中的回调函数执行，打印then2-2，此时microtasks为[]
