const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string') return false;
  let sa = parseFloat(sampleActivity);
  if(isNaN(sa)) return false;
  if(sa > 15 || sa < 1) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / sa) / k;
  return Math.ceil(t);
};
