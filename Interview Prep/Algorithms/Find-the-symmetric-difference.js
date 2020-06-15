//  A function that takes two or more arrays and returns an array of their symmetric difference.
function sym(...args) {
//  A function that takes two arrays and returns an array of their symmetric difference. 
  function symmetricDifference(a, b) {
    // Assigned an empty array in this function to push symmetric diffrent number between a and b. 
    var res = [];
  //  Used forEach loop in argument a  array so that we can check every element of a in b array.
    a.forEach(function (ele) {
      if (b.indexOf(ele) < 0 && res.indexOf(ele) < 0) {
        res.push(ele);
      }
    });
     //  Used forEach loop in argument b  array so that we can check every element of b in a array.
    b.forEach(function (ele) {
      if (a.indexOf(ele) < 0 && res.indexOf(ele) < 0) {
        res.push(ele);
      }
    });


    return res;
  }
// In the function sym we can receive 2 or more then 2 arrays as a argument but in symmetricdiffrence we will only receive 2 arrays so we have to define a will be args[0] and b will be args[1]   
  var a = args[0];
  var b = args[1];     //    

  for (var i = 2; i <= args.length; i++) {  //  2  3<3
    var ans = symmetricDifference(a, b)
    a = ans;
    b = args[i];
  }



  return ans;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
