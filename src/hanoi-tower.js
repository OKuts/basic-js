const CustomError = require("../extensions/custom-error");

module.exports = function calculateccc(disksNumber, turnsSpeed) {
  return { turns: Math.floor(2 ** disksNumber - 1), seconds: Math.floor(Math.floor(2 ** disksNumber - 1) / turnsSpeed * 3600) }
};
