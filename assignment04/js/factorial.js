let elcal =document.getElementById("cal")
let elnum =document.getElementById("num")
let elres =document.getElementById("res")

/*helper function */

function factorial(n)
{
	let answer = 1;
	if (n == 0 || n == 1){
	  return answer;
	}else{
	  for(var i = n; i >= 1; i--){
		answer = answer * i;
	  }
	  return answer;
	}  
}

elcal.addEventListener("click", function()
{
	elres.innerHTML = "The factorial of " + num.value + " is" + factorial(num.value)

})
