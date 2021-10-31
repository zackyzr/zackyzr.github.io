let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
	console.log("booknow clicked!")

	let userName = document.getElementById("userName")
	let userNameVal = userName.value

	let userEmail = document.getElementById("userEmail")
	let userEmailVal = userEmail.value

	let sDate = document.getElementById("sDate")
	let sDateVal = sDate.value

	let eDate = document.getElementById("eDate")
	let eDateVal = eDate.value

	let roomType = document.getElementById("roomType")
	let roomTypeVal = roomType.value

	let userPax = document.getElementById("userPax")
	let userPaxVal = userPax.value

	let userRemarks = document.getElementById("userRemarks")
	let userRemarksVal = userRemarks.value

	bookNow(userNameVal, userEmailVal, sDateVal, eDateVal, roomTypeVal, userPaxVal, userRemarksVal)

})

function bookNow(userName, userEmail, sDate, eDate, roomType, userPax, userRemarks) {
	
	/*console.log(userName)
	console.log(userEmail)
	console.log(sDate)
	console.log(eDate)
	console.log(roomType)
	console.log(userPax)
	console.log(userRemarks)
	*/
	let url = 'https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp2/mans';
	let body = {
		man: {
			name: userName,
			email: userEmail,
			pax: userPax,
			startDate: sDate,
			endDate: eDate,
			roomType: roomType,
			remarks: userRemarks
		}
	}
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
	  }
	})
		.then((response) => response.json())
		.then(json => {
			// Do something with object
			console.log(json.man);
			alert("Your booking was succesful! Please wait for us to email you the total cost.")
		});

}