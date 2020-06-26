function fun(l,r){     //    l=[5] ,,,  r=[2]
    var arr=[]          //  arr=
    while(l.length && r.length){    // 1 && 1 
      if (l[0]<r[0]){   //     5<2
        arr.push(l.shift())
      }
      else{
        arr.push(r.shift())     // arr=[2]   ,,,,,  r=[]
      }
    }
  return arr.concat(l,r)
  }  
  // ========================================
function mergeSort(arr) {   // arr=[30,24,58,12,70,10]
    if (arr.length<2){     // false
      return arr
    }
  var m=Math.floor((arr.length/2) )  //   m=3
  var l=arr.slice(0,m)            //   l = [30,24,58]
  
  var r=arr.slice(m,)              //  r=[12,70,10]
  return fun(mergeSort(l),mergeSort(r))   // 
  }
mergeSort([30,24,58,12,70,10]); 

