class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.machine = machineType
  }
  verification(message, cod) {
    let a = Math.floor(message.length);
    let b = Math.floor(cod.length);
    if (!a && !b) throw Error;
    return [a, b, message.toUpperCase(), cod.toUpperCase()]
  }

  encrypt(message, key) {
    let a, b, codMes, codKey, myCod;
    let out = '';
    let i = 0;
    [a, b, message, key] = this.verification(message, key);
    message.split('').forEach(el => {
      codMes = el.codePointAt(0);
      codKey = key[i % b].codePointAt(0);
      if (codMes > 64 && codMes < 91 && codKey > 64 && codKey < 91) {
        myCod = codKey + codMes - 65;
        if (myCod > 90) myCod -= 26;
        out += String.fromCodePoint(myCod);
        i++;
      } else out += el;
    })
    if (this.machine) return out;
    return out.split('').reverse().join('');
  }

  decrypt(message, key) {
    let a, b, codMes, codKey, myCod;
    let out = '';
    let i = 0;
    [a, b, message, key] = this.verification(message, key);
    message.split('').forEach(el => {
      codMes = el.codePointAt(0);
      codKey = key[i % b].codePointAt(0);
      if (codMes > 64 && codMes < 91 && codKey > 64 && codKey < 91) {
        myCod = codMes - codKey + 65;
        if (myCod < 65) myCod += 26;
        out += String.fromCodePoint(myCod);
        i++;
      } else {
        out += el;
      }
    })
    if (this.machine) return out;
    return out.split('').reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
