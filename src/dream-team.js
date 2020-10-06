const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let mem = Array.isArray(members) ? members.filter(el => typeof el === 'string')
    .map(el => el.trim()[0].toUpperCase())
    .filter(el => /\b[A-Z]{1}/.test(el))
    .sort()
    .join('') : false
  return mem ? mem : false;
};
