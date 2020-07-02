
function fun1(d){         // d=28
  if (d==1){
    return 1
  }   
  var n=d          // n=28
var i=2                // i=2  
var p=1            
// ====================
  while(i*i<=d){        //   36<=28         
    var c=1                   // c=1  
    while(n%i==0){      //   
      n=n/i         
      c+=1        
    }
    i++         
    p=p*c            //   p=3        n=7      
  }       
  // =======================
if (d==n||n>1){   
  p=p*2                 // 6 

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


divisibleTriangleNumber(28)    