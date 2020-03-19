module.exports = function check(str, bracketsConfig){
  let brackets = [];
  for(let i = 0; i < bracketsConfig.length; i++) {
     brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  for (let i = 0; i < brackets.length;) {
    if (str.indexOf(brackets[i]) !== -1) {
      str = str.replace(brackets[i], '');
      i = 0;
    }
    else i++;
  }

  return str.length == 0 ? true : false;
}
