const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
    return ['winter', 'spring', 'summer', 'autumn (fall)'][Math.round((date.getMonth() === 11 ? 0 : date.getMonth()) / 3)];
  }
  throw "Error";
};
