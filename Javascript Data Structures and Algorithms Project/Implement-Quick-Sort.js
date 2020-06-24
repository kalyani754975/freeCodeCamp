//  A function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
function quickSort(array) {
  //  checking the array length is less than 1 or exact 1
  if (array.length <= 1) {
    // returning the array as it is when its length is less than 1  or exact 1 
    return array;
  }
  else {
    // taking the empty array for getting the sorted resulted array
    var result = [];
    // taking the last element of array in pivot and storing it in a variable
    var pivot = array.pop();
    // taking an empty array for the left part of the array
    var leftPart = [];
    // taking an empty array for the right part of the array
    var rightPart = [];
    // iterating through the array to seperate the element in leftpart and rightpart of the array 
    for (var i = 0; i < array.length; i++) {
      // checking if the element is equal or less than the pivot value
      if (array[i] <= pivot) {
        // inserting the element in leftpart array
        leftPart.push(array[i])
      } else {
        // inserting the element in rightpart array
        rightPart.push(array[i])
      }
    }
  }
  // calling the recusrsive function multiple times and returning the resulted sorted array 
  return result.concat(quickSort(leftPart), pivot, quickSort(rightPart))
}
quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) 
