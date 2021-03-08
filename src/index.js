module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let reversed = arr.reverse();
  return Number(reversed.join(''));
}
