module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
    let numToArr = n.toString().split('');
    let arrRevers = numToArr.reverse();
    let arrToNum = +arrRevers.join('');
    return arrToNum;
  } else {
    let numToArr = n.toString().split('');
    let arrRevers = numToArr.reverse();
    let arrToNum = +arrRevers.join('');
    return arrToNum;
  }
}
