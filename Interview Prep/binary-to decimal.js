function decimal(num) {
  var mult = 0;
  var sum = 0;
  var bin = 1;
  while (num > 0) {
    var final = num % 10
    var bin = final * 2 ** mult
    num = (num / 10) >> 0
    sum += bin
    mult++
  }
  return sum;
}
console.log(decimal(111))
