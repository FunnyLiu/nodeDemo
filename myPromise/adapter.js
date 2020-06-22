const Promise = require('./myPromise');
module.exports = {
  resolved: Promise.resolve,
  rejected: Promise.reject,
  deferred: function () {
    const deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  },
};