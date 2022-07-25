const binanceApiUrl = "https://api.binance.com";
let apiResponse;
const title = document.getElementById("title");
let cryptoTitle;

let query = '/api/v1/ticker/24hr';
query += '?symbol=BTCUSDT';
const url = binanceApiUrl + query;

const newRequest = new XMLHttpRequest();
newRequest.open('GET', url, true);
newRequest.onload = function () {
	console.log("array from string: ", newRequest.responseText.split(","));
	this.cryptoTitle = newRequest.responseText;
	console.log("cryptoTitle: ", cryptoTitle);
	document.getElementById("title").innerHTML += Array.from(this.cryptoTitle);
	// return apiResponse = newRequest.responseText
}
newRequest.send();