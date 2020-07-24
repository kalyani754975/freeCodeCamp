function binary_to_decimal(str) {
  var arr = str.split("")
  var power = 0;
  var store = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (parseInt(arr[i]) == 1) {
      store = store + (2 ** power)
    }
    power = power + 1
  }
  return store
}
console.log(binary_to_decimal("10011001100110011001"))











