//toupper
//go livve can only be in index html not js

function transUpper(_val){
	return _val.toUpperCase();
}

let eluserName = document.getElementById("userName")

eluserName.addEventListener("keyup",function()
{
	eluserName.value = transUpper(eluserName.value);
})