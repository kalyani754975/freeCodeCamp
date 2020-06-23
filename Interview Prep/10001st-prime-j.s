// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the nth prime number?

function nthPrime(n) {
  // putting the initial prime number in the array
  var resultedarr = [2];
  // first value to check it is prime or not
  var num = 3;
  // assuming number is a prime number
  var flag = 1;
  //  while loop t opush prime numbers in array.
  while (resultedarr.length < n) {
    // maximim value to check that can be a factor of number
    var max = Math.ceil(Math.sqrt(num))  //
    // loop througth array to check whetehr number is divisible by prime numbers in array
    for (var i = 0; resultedarr[i] <= max; i++) {
      // chacking number is divible by element in array
      if (num % resultedarr[i] == 0) {
        // changing value of flag if number is not prime
        flag = 0
        break;
      }
    }
    if (flag == 1) {
      // pushing the number in array if its prime
      resultedarr.push(num)
    }
    // next value to check for prime
    num += 2;
    // changing the assumption of number back to prime for next number. 
    flag = 1;
  }
  // returning the last (nth element) of resulted array
  return resultedarr[resultedarr.length - 1]
}

nthPrime(10001);
