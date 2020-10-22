// 步骤一：了解promise规范
// 步骤二：实现
// 步骤三：测试
// 几种状态常量
const statusMap = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};
// 将promise设置为fulfilled状态
function fulfilledPromise(promise, value) {
  // 只能从pending状态转换为其他状态
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  // 将pending的promise转为fulfilled
  promise.status = statusMap.FULFILLED;
  promise.value = value;
  runCbs(promise.fulfilledCbs, value);
}
// 将promise设置为rejected状态
function rejectedPromise(promise, reason) {
  // 只能从pending状态转换为其他状态
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  promise.status = statusMap.REJECTED;
  promise.reason = reason;
  runCbs(promise.rejectedCbs, reason);
}
function runCbs(cbs, value) {
  cbs.forEach(cb => cb(value));
}
function isFunction(fn) {
  return (
    Object.prototype.toString.call(fn).toLocaleLowerCase() ===
    '[object function]'
  );
}
function isObject(obj) {
  return (
    Object.prototype.toString.call(obj).toLocaleLowerCase() ===
    '[object object]'
  );
}
function isPromise(p) {
  return p instanceof Promise;
}
// promise的解析
function resolvePromise(promise, x) {
  // x 与promise相同
  // 防止循环引用
  if (promise === x) {
    rejectedPromise(promise, new TypeError('cant be the same'));
    return;
  }
  // x 是promise
  if (isPromise(x)) {
    // 完成状态
    if (x.status === statusMap.FULFILLED) {
      fulfilledPromise(promise, x.value);
      return;
    }
    // 失败状态
    if (x.status === statusMap.REJECTED) {
      rejectedPromise(promise, x.reason);
      return;
    }
    // pending状态
    if (x.status === statusMap.PENDING) {
      // 执行其then
      x.then(
        () => {
          fulfilledPromise(promise, x.value);
        },
        () => {
          rejectedPromise(promise, x.reason);
        }
      );
      return;
    }
    return;
  }
  // x 是对象或函数
  if (isObject(x) || isFunction(x)) {
    let then;
    let called = false;
    // 兼容异常情况
    try {
      then = x.then;
    } catch (error) {
      rejectedPromise(promise, error);
      return;
    }
    // 如果x是thenable对象
    if (isFunction(then)) {
      // 执行其then方法
      try {
        then.call(
          x,
          y => {
            if (called) {
              return;
            }
            called = true;
            // 递归解析promise
            resolvePromise(promise, y);
          },
          r => {
            if (called) {
              return;
            }
            called = true;
            rejectedPromise(promise, r);
          }
        );
      } catch (error) {
        if (called) {
          return;
        }
        called = true;
        rejectedPromise(promise, error);
      }
      return;
    } else {
      // 说明x是个普通值，比如resolve({code:0})，中的{code:0}
      fulfilledPromise(promise, x);
      return;
    }
    // x不是对象或者函数
  } else {
    fulfilledPromise(promise, x);
    return;
  }
}
class Promise {
  constructor(fn) {
    this.status = statusMap.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCbs = []; // then fulfilled callback
    this.rejectedCbs = []; // then rejected callback
    fn(
      value => {
        // fulfilledPromise(this, value);
        // 解析promise
        resolvePromise(this, value);
      },
      reason => {
        rejectedPromise(this, reason);
      }
    );
  }
  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }
  static all(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        throw new Error(`argument must be a array`);
      }
      let dataArr = [];
      let num = 0;
      for (let i = 0; i < arr.length; i++) {
		let p = arr[i];
		if(!isPromise(p)){
			p = Promise.resolve(p)
		}
        p.then(data => {
          dataArr.push(data);
          num++;
          if (num === arr.length) {
            return resolve(dataArr);
          }
        }).catch(e => {
          return reject(e);
        });
      }
    });
  }
  static race(arr){
    let hasValue = false
    let hasError = false
    return new Promise((resolve, reject) => {
      for(let i = 0; i < arr.length; i++) {
        arr[i].then(data => {
          !hasValue && !hasError && resolve(data) 
          hasValue = true
        }, error => {
          !hasValue && !hasError &&reject(error)
          hasError = true
        })
      }
    })
  }
  // 两个参数
  then(onFulfilled, onRejected) {
    const promise1 = this;
    const promise2 = new Promise(() => {});
    // 如果是完成状态
    if (promise1.status === statusMap.FULFILLED) {
      if (!isFunction(onFulfilled)) {
        return promise1;
      }
      // 通过setTimeout来做为微任务api
      setTimeout(() => {
        try {
          const x = onFulfilled(promise1.value);
          // 将x.then对接promise2
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0);
    }
    // 如果是失败状态
    if (promise1.status === statusMap.REJECTED) {
      if (!isFunction(onRejected)) {
        return promise1;
      }
      setTimeout(() => {
        try {
          const x = onRejected(promise1.reason);
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0);
    }
    // 如果是pending状态
    if (promise1.status === statusMap.PENDING) {
      onFulfilled = isFunction(onFulfilled)
        ? onFulfilled
        : value => {
            return value;
          };
      onRejected = isFunction(onRejected)
        ? onRejected
        : err => {
            throw err;
          };
      // 将执行链加到对应的回调队列中去
      promise1.fulfilledCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(promise1.value);
            resolvePromise(promise2, x);
          } catch (error) {
            rejectedPromise(promise2, error);
          }
        }, 0);
      });
      promise1.rejectedCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(promise1.reason);
            resolvePromise(promise2, x);
          } catch (error) {
            rejectedPromise(promise2, error);
          }
        }, 0);
      });
    }
    // 将构造好的promise2对象返回出去
    return promise2;
  }
  // catch就是then的语法糖
  catch(callback) {
    return this.then(null, callback);
  }
  // finally本质也是then的语法糖
  finally(callback) {
    return this.then(
      data => {
        return Promise.resolve(callback()).then(() => data);
      },
      err => {
        return Promise.resolve(callback()).then(() => {
          throw err;
        });
      }
    );
  }
}

// 测试用到的钩子
Promise.deferred = function() {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

module.exports = Promise;
