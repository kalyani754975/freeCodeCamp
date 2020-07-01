// function divisibleTriangleNumber(num) {
// function numberofdivisor(n){
// var c=0
// for (var i=1;i<=n;i++){
//   if (n%i==0){
//     c+=1
//   }
// }
// return c   }

// var n=1     
// var i=2   
// while(numberofdivisor(n)<=num){  
// n+=i      
// i++                     
// }
// var res=n
// return res
  
// }

// console.log(divisibleTriangleNumber(7));







// =============================
function fun1(d){
  var n=d
var i=2
var p=1
  if (d==1){
    return 1
  }

  while(i*i<=d){
    var c=1
    while(n%i==0){
      n=n/i
      c+=1
    }
    i++
    p=p*c
  }
if (d==n||n>1){
  p=p*2

  }
return p
}




function divisibleTriangleNumber(x){
var n=1
var d=1

while( fun1(d)<=x){
  n++
  d+=n

}
return d

}


console.log(divisibleTriangleNumber(5))





