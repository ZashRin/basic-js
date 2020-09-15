const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  if(!members.length) return "FAIL";
  let l = members
  .filter(x => typeof(x) === 'string')
  .map(x => x.trim().slice(0,1).toUpperCase())
  .sort()
  .join('');
  return l;
};
