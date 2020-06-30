// Special Pythagorean triplet : A program to find Special Pythagorean Triplet(abc) which satisfies these conditions (i.e. a**2+b**2=c**2  and a+b+c=n)

function specialPythagoreanTriplet(n) {
// for loop to find the first triplet
 for(var a=1;a<n/3;a++){
//  for loop to find the second triplet
   for(var b=1;b<n/2;b++){
//  checking the first required condition
     var c= n-a-b;
 // checking if a and b both are less than c
     if(a<c && b<c){
//    checking the second required condition
       if(a*a+b*b==c*c){
//  returning the product of special pythagorean triplet
         return a*b*c
       }
     }
   }
 }
}
// calling the function  
specialPythagoreanTriplet(1000);




