//  A function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
function insertionSort(array) {
  // looping through array for selection of element that needs to be inserted on its right position
  for (var i = 1; i < array.length; i++) {
    // selecting one element in array for shifting to its  right position
    var sel = array[i]
    // looping to check the right position of selected element
    for (var j = i - 1; j >= 0 && array[j] > sel; j--) {
      // shifting the element to the right side
      array[j + 1] = array[j]
    }
    // inserting the selected element at its right position in array
    array[j + 1] = sel;
  }
  // returning the sorted array
  return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
