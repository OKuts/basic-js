const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
  let myArr = [];
  let i = 0;
  flag = true;
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next': {
        i++;
        flag = false;
      }
        break;
      case '--discard-prev': {
        if (myArr.length > 0 && flag) myArr.pop();
      }
        break;
      case '--double-next': {
        if (i < arr.length - 1) {
          myArr.push(arr[i + 1]);
          flag = true;
        }
      }
        break;
      case '--double-prev': {
        if (flag && i > 0) {
          myArr.push(arr[i - 1]);
          flag = true
        }
      }
        break;
      default: {
        myArr.push(arr[i]);
        flag = true;
      }
        break;
    }
    i++;
  }
  return myArr;
}

// console.log(transform( [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))   
// console.log(transform(  [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))     
// console.log(transform( [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))     
// console.log(transform( [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))   
// console.log(transform([1, 2, 3, '--double-next', 4, 5])) //=> [1, 2, 3, 4, 4, 5]

