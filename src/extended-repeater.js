const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = str;
  let res1 = str;
  if(options.hasOwnProperty('addition')){
    let add = options.addition;
    for(let k = 0; k < (options.additionRepeatTimes ? options.additionRepeatTimes - 1 : 0); k++)
      add += (options.additionSeparator ? options.additionSeparator : '') + options.addition;
    
    res1 += add;
    res += add;
  }
  for(let i = 0; i < (options.repeatTimes ? options.repeatTimes - 1 : 0); i++)
    res += (options.separator ? options.separator : '+') + res1;
  return res;
};
  