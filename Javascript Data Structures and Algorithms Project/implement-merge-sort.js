//  a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest
function mergeSort(arr) {
  //calculated the middle index of the array 
  var halfLength = arr.length / 2
  // checked if the array length is less than 2 then return the array as it is
  if (arr.length < 2) {
    return arr
  }
  // taking the left part of the array in a variable
  var leftPart = arr.slice(0, halfLength)
  // taking the right part of the array in another variable
  var rightPart = arr.slice(halfLength)
  // calling the mergeSort function recursively and calling the merge function to get the sorted array.
  return merge(mergeSort(leftPart), mergeSort(rightPart))
}
// function to sort and merge the array
function merge(leftPart, rightPart) {
  // initiallizing the empty array to store the sorted array
  var arr = []
  // running while loop untill one of the aaray not reduced to zero length
  while (leftPart.length && rightPart.length) {
    // comparing the first element of both array
    if (leftPart[0] < rightPart[0]) {
      // removing the element from left array and adding in the array 
      arr.push(leftPart.shift())
    } else {
      // removing the element from right array and adding in the array 
      arr.push(rightPart.shift())
    }

  }

  // adding the remaining array in the sorted array 
  return arr.concat(leftPart, rightPart)

}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
