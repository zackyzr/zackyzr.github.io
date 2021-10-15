let elstring = document.getElementById("string")
let elcheck = document.getElementById("check")
let elres = document.getElementById("res")

function palindrome(str) 
{
	var re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len/2; i++)
	{
	  if (str[i] !== str[len - 1 - i]) 
	  {
		  let answer = "not a palindrome."
		  return answer;
	  }
	}
	answer = "a palindrome."
	return answer;
   }

elcheck.addEventListener("click", function()
{

	elres.innerHTML = "The input is " + palindrome(string.value)

})
