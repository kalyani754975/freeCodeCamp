//  A function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
function getFinalOpenedDoors(numDoors) {
  // Assigned an empty array for printing the "open", "close" value.
  var arr = [];
  // for loop for initializing every elemnts as "closed".
  for (var i = 0; i < numDoors; i++) {
    // initializing each element as "closed"
    arr[i] = "closed";
  }
  // toggle function for toggling the state of door
  function toggle(a) {
    // checking if value of door in array is closed or not
    if (a == "closed") {
      // chaging the state of door as "open"
      a = "open";
    } else {
      // changing the state of the door as "closed" if is open
      a = "closed"
    }
    // returning the new state of door to the array
    return a;
  }
  // taking first round in array for toggling the doors in array
  var round = 1;
  // running while loop untill round value is greater than number of doors in array
  while (round != numDoors + 1) {
    // running for loop for toggling the specific door based on round value
    for (var i = round - 1; i < numDoors; i += round) {
      // calling the toggle function and assigning the changed value to the element of array
      arr[i] = toggle(arr[i])
    }
    // increasing the round value  
    round += 1
  }
  //Assigned an empty arr for final answer 
  var ans = [];
  // Running for loop for checking every element in array. It is "closed" or "open" 
  for (var i = 0; i < arr.length; i++) {
    // if the element is "open" or "closed"
    if (arr[i] == "open") {
      // if it is "open" then push it in the ans array
      ans.push(i + 1)
    }
  }
  // returned the answer in the array
  return ans;
}
console.log(getFinalOpenedDoors(5))
