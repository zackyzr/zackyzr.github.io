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

//check pass

function checkPass()
{
	let elpassWord = document.getElementById("password")

	let pass_val = elpassWord.value

	if(pass_val.length > 5){
		alert("password check .. OK!")
	}
	else{
		alert("password too short !")
	}
}

// traditional dom listenr
let elKL = document.getElementById("password")
elKL.onblur = checkPass

function sayHi()
{
event.preventDefault();
alert("we have stopped the default event")
}
	 
