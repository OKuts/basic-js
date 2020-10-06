module.exports = function repeater(str, options) {
    let addition = options.addition || options.addition === false || options.addition === null ? options.addition : '';
    let separator = options.separator || '+';
    let addSeparator = options.additionSeparator || '|';
    let add = String(str) + new Array(options.additionRepeatTimes)
        .fill(addition + addSeparator)
        .join('')
        .slice(0, -addSeparator.length) + separator;
    str = new Array(options.repeatTimes)
        .fill(add)
        .join('')
        .slice(0, -separator.length)
    return str;
};

