function specialPythagoreanTriplet(n) {
var a=1   
var b=1
var c=Math.sqrt(a*a+b*b)   
// console.log(c)    
var sum=a+b+c       // 24
// console.log(sum)  
while(sum!=n){       //  3.4!=24  
  if (sum>n){    ///    3.4 >24  
    a++
    b=a+1
  }else{        //   
    b++         //  b=2
  }
  c=Math.sqrt(a*a+b*b)     // 
  console.log(c)
sum=a+b+c
console.log("sum:"+sum)    
}
return a*b*c
} 
console.log(specialPythagoreanTriplet(24));
