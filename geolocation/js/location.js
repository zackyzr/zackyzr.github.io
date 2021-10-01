//button tings

let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(position)
	{

		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(function(position)
			{
				let elLat = document.getElementById("lat")
				let elLong = document.getElementById("long")
		
				elLat.innerHTML = "Latitude is " + position.coords.latitude
				elLong.innerHTML = "Longitude is " + position.coords.longitude

			})
		}

		else
		{
			alert("geolocation is not supported")
		}
			
	})