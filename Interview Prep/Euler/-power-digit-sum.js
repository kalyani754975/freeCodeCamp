// A function that does the sum of the digits of the number 2exponent like 2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

function powerDigitSum(exponent) {

  var order = 0;
  var digits = Math.floor(1 + exponent * Math.LN2 / Math.LN10);

  var number = new Uint8Array(digits);

  number[0] = 1;


  for (var i = 0; i < exponent; i++) {   //0  --14

    var carry = 0;       // 0

    for (var j = 0; j <= order; j++) {   // 0- 

      var product = 2 * number[j] + carry;
      number[j] = product % 10;
      carry = product / 10 | 0;

      if (j === order && carry > 0) {
        order++;
      }
    }
  }

  return number.reduce((p, x) => x + p, 0);
}

console.log(powerDigitSum(15));
