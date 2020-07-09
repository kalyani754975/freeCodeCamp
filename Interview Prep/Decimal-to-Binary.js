//A function that converts decimal to binary
function binary(num) {

  var arr = [];
  while (num > 0) {
    var r = num % 2
    arr.push(r)
    num = (num - r) / 2

  }

  return arr.reverse()


};
console.log(...binary(7))
