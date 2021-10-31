let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
	console.log("managed clicked")
	GetBooking()
})

function GetBooking() {
	let url = 'https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp2/mans';
	fetch(url)
		.then((response) => response.json())
		.then(json => {
			// Do something with the data
			console.log(json.mans);

			let bookingNameList = document.getElementById("bookingNameList")
			let bookingIds = []

			//delete all rows in the table
			console.log("delete row");
			for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
				bookingNameList.deleteRow(k)
			}

			//Reload sheet api

			for (let i = 0; i < json.mans.length; i++) {
				let gName 		= json.mans[i].name;
				let gRoomType 	= json.mans[i].roomType;
				let gDate 		= json.mans[i].startDate;
				let gId			= json.mans[i].id;
				let gPax 		= json.mans[i].pax;
				let btnId 		= "delete" + gId;

				let row = bookingNameList.insertRow(bookingNameList.rows.length)
				

				row.insertCell(0).innerHTML = gId
				row.insertCell(1).innerHTML = gName
				row.insertCell(2).innerHTML = gRoomType
				row.insertCell(3).innerHTML = gPax
				row.insertCell(4).innerHTML = gDate
				row.insertCell(5).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

				bookingIds.push(btnId)
			}

				for (let j = 0; j < bookingIds.length; j++) {
					let el = document.getElementById(bookingIds[j])
					console.log(bookingIds[j])

					
					el.addEventListener("click", function () {
						let theId = el.id.replace("delete", "")
						console.log(theId)
						
						DeleteBooking(theId)
					})
				}

			});
}


function DeleteBooking(id) {
    let url = 'https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp2/mans/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
			console.log("delete reservation");
            alert("Reservation no " + id + " has been cancelled!")
			GetBooking()
        });
}
