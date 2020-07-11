function decimal(num) {
  var sum = 0
  var binary = 0;
  var mult = 0;

  while (num > 0) {
    var remainder = num % 10

    var binary = remainder * 2 ** mult


    num = (num / 10) >> 0
    sum += binary
    mult++
  }
  return sum;
}
console.log(decimal(1001111111111111111111111))
