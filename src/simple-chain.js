const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(!this.chain) this.chain = [];
    let s = '' + value;
    this.chain.push(s.length ? '( ' + s + ' )' : '( )');
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || typeof(position) !== 'number'){
      this.chain = [];
      throw new Error('Err');
    }
    if(position < 1 || position > this.getLength()){
      this.chain = [];
      throw new Error('Err');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if(this.chain) this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = this.chain.join('~~');
    this.chain = [];
    return s;
  }
};

module.exports = chainMaker;
