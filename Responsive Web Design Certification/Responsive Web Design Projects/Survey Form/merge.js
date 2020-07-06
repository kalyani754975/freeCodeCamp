var getDigits = function(power) {         //   15  
    var digits = [];                                     //  []
    digits[0] = 1;                  //    [16]
    

    while (power > 0) {          
        for (var i = digits.length-1; i >= 0; i--) {    // i=0  
            digits[i] *= 2;                          //   1=1*2   =2
            

            if (digits[i] > 9) {                 
                digits[i] -= 10;
                digits[i+1] = digits[i+1] || 0;
                digits[i+1] += 1;
            }
        }
        power--;  
    }
    return digits;
};

var powerDigitSum = function(power){              // 
  
    var digits = getDigits(power); 
                        
    var sum = 0;
    for(var i = digits.length - 1; i >= 0; i--){
        sum += digits[i];
    }
    return sum;
};
powerDigitSum(15);  