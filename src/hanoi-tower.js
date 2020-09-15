const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = 0;
  let tps = turnsSpeed / 3600;
  for(let i = 0; i < disksNumber; i++)
    t += Math.pow(2,i);
  let s = Math.floor(t / tps);
  return {turns: t, seconds: s};
};
