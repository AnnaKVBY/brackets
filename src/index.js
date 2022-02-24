module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let changed = bracketsConfig.join('').replace(/,/g,'');
  for (let s of str) {
    let symbInd = changed.indexOf(s);
    if (symbInd % 2 === 0) {
      if (s === changed[symbInd+1] && stack[stack.length-1] === symbInd){
        stack.pop();
      } else if (s === changed[symbInd+1] && stack[stack.length-1] !== symbInd){
        stack.push(symbInd)
      } else {
        stack.push(symbInd)
      }
     
    } else if (stack.pop() != symbInd-1) {
      return false;
    }

    }

    return stack.length === 0;

}
