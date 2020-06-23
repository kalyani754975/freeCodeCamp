// function for checking the array is lexically equal or not
function allEqual(arr) {
  // checking the length of array if it has 0 or 1 length return true
  if (arr.length == 0 || arr.length == 1) {
    return true
  }
  // initializing an empty array for taking the total of charcode of each elemnt of array
  var res = []
  // for loop through array 
  for (var i = 0; i < arr.length; i++) {  //4
    // initilizing total of code for each element of array
    var total = 0
    // for loop through each element of array
    for (var j = 0; j < arr[i].length; j++) {
      // adding the char code of char of element
      total += arr[i].charCodeAt(j)
    }
    // pushing the total in array of res
    res.push(total)
  }
  // getting total for each element of array
  var total = res.reduce((a, b) => a + b)


  // checking if total value is divisible by char code of first element 
  if (total % res[0] == 0) {

    return true
  }
  else {
    return false
  }
}
allEqual(["AA", "AA", "AA", "AA"])

// function for checking the array is sorted alphabetically or not
function azSorted(a) {
  // checking if length is 0 then return true
  if (a.length == 0) { return true }
  // for loop through elemnts of array
  for (var i = 0; i < a.length - 1; i++) {
    //  initializing shortest length as 0
    var sl = 0
    // taking first element in a element
    var el1 = a[0]
    //taking second element in a element
    var el2 = a[1]
    // comparing first and second element length 
    if (el1.length <= el2.length) {
      //  putting first element length in variable sl if it is smaller than second
      sl = el1.length;
    } else {
      //  putting second element length in variable sl if it is smaller than first
      sl = el2.length;
    }
    // for loop till the length of sl variable
    for (var j = 0; j < sl; j++) {
      // checking if last element same in each element is same return false
      if (el1.charCodeAt(j) == el2.charCodeAt(j) && j == sl - 1) {
        return false;
      }
      // if char of element is same then throw your compiler back to the for loop
      else if (el1.charCodeAt(j) == el2.charCodeAt(j)) {
        continue;
      }
      //  if char of element is less than the charin second element then throw your compiler back to the for loop
      else if (el1.charCodeAt(j) < el2.charCodeAt(j)) {
        continue
      }
      // if character are not sorted and upper both conditon is false then return false
      else {
        return false
      }
    }
  }
  // return true if element in array are in sorted order
  return true
}
