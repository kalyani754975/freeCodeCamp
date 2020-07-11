<html>
<head>
<script>
function Add()
{

var num1=parseInt(document.getElementById("number1").value);
var num2=parseInt(document.getElementById("number2").value);
var cal=num1+num2;
document.getElementById("number3").value=cal;
}

function sub(){
var num1=parseInt(document.getElementById("number1").value);
var num2=parseInt(document.getElementById("number2").value);
var cal;
if(num1>num2)
cal=num1-num2;
else
cal=num2-num1;
document.getElementById("number3").value=cal;
}


function mult(){
var num1=parseInt(document.getElementById("number1").value);
var num2=parseInt(document.getElementById("number2").value);
var cal=num1*num2;
document.getElementById("number3").value=cal;
}



</script>

</head>
<body>
<center>
<h2>Calculator</h2>
<br/>
<input type="text" id="number1" placeholder="enter a number"/  >
<input type="text" id="number2" placeholder="enter a number"/  >
<br/><input type="text" readonly id="number3" placeholder="Result"/>
<br/><br/>
<input type="button" value="+" onmouseover="Add()"/>
<input type="button" vaLUE="*" onclick = "mult()" />
<input type="button" value="-" onclick = "sub()" />
</body>
</html>



