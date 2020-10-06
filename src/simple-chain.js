const chainMaker = {
  chain: '',
  getLength() {
    return this.chain ? this.chain.match(/( [^\s]* )/g).length : 0;
  },
  addLink(value) {
    this.chain += (`( ${value !== undefined ? value : ''} )~~`);
    return this;
  },
  removeLink(p) {
    if (p - Math.floor(p) === 0 && p > 0 && p <= this.getLength()) {
      this.chain = this.finishChain().split('~~');
      this.chain.splice(p - 1, 1);
      this.chain = this.chain.join('~~') + '~~';
    } else {
      this.chain = '';
      throw Error;
    }
    return this;
  },
  reverseChain() {
    if (this.getLength() > 1) {
      this.chain = this.finishChain().split('~~').reverse().join('~~') + '~~';
    }
    return this;
  },
  finishChain() {
    let temp = '';
    if (this.chain) temp = this.chain.slice(0, -2);
    this.chain = '';
    return temp;
  }
};


module.exports = chainMaker;
