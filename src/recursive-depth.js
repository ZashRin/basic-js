const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let c = 1, m = 1;
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])) c += this.calculateDepth(arr[i]);
      m = c > m ? c : m;
      c = 1;
    }
    return m;
  }
};