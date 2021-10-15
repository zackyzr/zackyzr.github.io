let elstring = document.getElementById("string")
let elcount = document.getElementById("count")
let elres = document.getElementById("res")

function check(str)
{
	let count = 0;
	for (let i = 0; i < str.length; i++)
	{
		if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
				|| str.charAt(i) == 'o' || str.charAt(i) == 'u')
		{
			count++;
		}
	}
	return count;
}

elcount.addEventListener("click", function()
{

	elres.innerHTML = "The number of vowels is " + check(string.value)

})