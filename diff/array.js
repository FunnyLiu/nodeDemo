const compareArrays = (source = [], compare = []) => {
  let diff = {};
  let same = {};
  let sameCount = 0;
  source.forEach((si, idx) => {
    //source长度小于或等于compare的情况
    if (idx <= compare.length) {
      if (si === compare[idx]) {
        //相同数量
        sameCount = sameCount + 1;
        same[idx] = si;
      } else {
        //不同就记录
        diff[idx] = { source: si, compare: compare[idx] };
      }
    }
  });
  //如果compare比source长，那compare后面的全部为diff
  if (source.length < compare.length) {
    for (let i = source.length; i < compare.length; i++) {
      diff[i] = { source: undefined, compare: compare[i] };
    }
  }
  //如果source比compare长，那source后面全部为diff
  if (source.length > compare.length) {
    for (let i = compare.length; i < source.length; i++) {
      diff[i] = { source: source[i], compare: undefined };
    }
  }
  if (Object.keys(diff).length === 0) {
    diff = undefined;
  }
  if (Object.keys(same).length === 0) {
    same = undefined;
  }
  return {
    sameCount,
    diff,
    same
  };
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log(compareArrays(arr1, arr2));
console.log('////////////////');
arr1 = [1, 2, 3, 4, 5];
arr2 = [1, '2', 3, '4', 5];
console.log(compareArrays(arr1, arr2));
console.log('////////////////');
arr1 = [1, 2, 3, 4, 5];
arr2 = [1, '2', 3, '4', 5, 6, 7, 8];
console.log(compareArrays(arr1, arr2));
console.log('////////////////');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = [1, '2', 3, '4', 5];
console.log(compareArrays(arr1, arr2));
console.log('////////////////');
arr1 = [1, 2, 3, 4, 5];
arr2 = [5, 4, '3', 2, 1];
console.log(compareArrays(arr1, arr2));
console.log('////////////////');
