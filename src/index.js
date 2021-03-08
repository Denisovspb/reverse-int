module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let reversed = arr.reverse();
  let newNum =  Number(reversed.join('') * Math(n));
  return newNum;
}
