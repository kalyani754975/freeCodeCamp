// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
function pairwise(arr, arg) {
  //assigning empty array to store sum of indexes of the paired elements
  var pairsum = [];
  // for loop through array to search for pair element
  for (var i = 0; i < arr.length; i++) {
    // calling function to check paired element
    if (fun(arr[i])) {
      arr[i] = "used"
    }
  }
  function fun(n) {
    // for loop through further elements of array to check pair element
    for (var i = arr.indexOf(n) + 1; i < arr.length; i++) {
      // checking the required condition for paired elements
      if (arr[i] + n == arg && arr[i] !== "used") {
        // adding the sum of indexes of the elements to the array
        pairsum.push(arr.indexOf(n) + i)
        //converting the value of paired element to "used"
        arr[i] = "used"

        return true;
      }
    }
  }
  // initialling the sum value as 0 
  var sum = 0;
  //   looping throgh array to get the desired output
  for (var i = 0; i < pairsum.length; i++) {
    // increasing the value of sum by adding elements of array
    sum += pairsum[i]
  }

  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
