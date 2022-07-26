// const axios = use('axios')
'use strict'

const binanceApiUrl = "https://api.binance.com";
let apiResponse;
const title = document.getElementById("title");
let cryptoTitle;

let query = '/api/v1/ticker/24hr';
query += '?symbol=ETHBTC';
const url = binanceApiUrl + query;

const getApiInfo = (async (request, response) => {
	const cryptoData = await axios
		.get(url)
		.then((res) => {
			if (res.status == 200)
				console.log('cryptoData:', res.data)
			return res.data
		})
		.catch((error) => {
			console.log(error)
		})

	if (cryptoData == false)
		return response.json([])

	// return response.json(cryptoData)
})();



// const newRequest = new XMLHttpRequest();
// newRequest.open('GET', url, true);
// newRequest.onload = function () {
// 	console.log("array from string: ", newRequest.responseText.split(","));
// 	this.cryptoTitle = newRequest.responseText;
// 	console.log("cryptoTitle: ", cryptoTitle);
// 	document.getElementById("title").innerHTML += Array.from(this.cryptoTitle);
// }
// newRequest.send();