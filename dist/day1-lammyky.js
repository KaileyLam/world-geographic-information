// Weather API
const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b81ee2dbemshc470313723e7afbp119734jsn60cd09c6b955',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

//New code
async function getData(){
	let response = await fetch(url, options);
	let data = await response.json();
	console.log(data);
	
	document.getElementById("city").insertAdjacentHTML('beforeend', `${data.city_name}`)
	document.getElementById("timezone").insertAdjacentHTML('beforebegin', `<h1>${data.timezone}</h1>`)

	document.getElementById("lat").insertAdjacentHTML('beforebegin', `<h1>${data.lat}</h1>`)

	document.getElementById("lon").insertAdjacentHTML('beforebegin', `<h1>${data.lon}</h1>`)

}

getData();