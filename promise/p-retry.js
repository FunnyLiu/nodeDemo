//重试函数
function retry(fn, count = 10) {
  return new Promise(async (resolve, reject) => {
    //本质上就是一个计时器
    while (count) {
      try {
        let res = await fn();
        resolve(res);
        return;
      } catch (e) {
        if (!count) reject(e);
        count--;
      }
    }
  });
}

let n = 10;
function getProm() {
    n--;
    return new Promise((resolve, reject) => {
        console.log(n);
        n < 4 ? resolve(n) : reject(n)
    });
}
//重试到成功为止
retry(getProm).then(data=>console.log(`final is ${data}`));