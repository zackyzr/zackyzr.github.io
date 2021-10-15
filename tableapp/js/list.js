/*let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking(){
	let url ="https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp/bookings" ;
	fetch(url)
	.then((response) => response.json())
	.then(json => {
		//Do something with data
		console.log(json.bookings);

		let bookingNameList = document.getElementById("bookingNameList")

		//delete all rows in table
		for(let k = bookingNameList.rows.length - 1; k > 0; k--)
		{
			bookingNameList.deleteRow(k)
		}

		//load all new rows from sheety API
		for(let i = 0; i < json.bookings.length; i++)
		{
			let gName	 = json.bookings[i].name;
			let gEmail	 = json.bookings[i].email;
			let gPax	 = json.bookings[i].pax;
			let gRemarks = json.bookings[i].remarks;
			let gID		 = json.bookings[i].id;

			let row = bookingNameList.insertRow(bookingNameList.row.length)

			row.insertCell(0).innerHTML = gId
			row.insertCell(1).innerHTML = gName
			row.insertCell(2).innerHTML = gEmail
			row.insertCell(3).innerHTML = gPax
			row.insertCell(4).innerHTML = gRemarks
			row.insertCell(5).innerHTML = ""

		}



	})
}
*/

let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = "https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp/bookings" ;
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gRemarks 
                row.insertCell(5).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/d0ee26f24ec023cbb11299f34bf1c977/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}