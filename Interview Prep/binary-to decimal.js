function decimal(num) {
    while(num > 0){
    var final = num%10
    var sum = 0
   var bin = 1;
    var mult = 0;
    var bin = final*2**mult
     
     
    num = (num/10)>>0
    sum += bin
    mult++
    }
    return sum;
     }
     decimal(111)
