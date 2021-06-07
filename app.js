let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
let stockNameElement = document.getElementById("stock-name");
let stockPriceElement = document.getElementById("stock-price");
let lastPrice = null;

ws.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	console.log("stockObject: ", stockObject);

	let name = stockObject.s;
	let price = parseFloat(stockObject.p).toFixed(2);
	stockNameElement.innerText = name;
	stockPriceElement.innerText = price;

	stockPriceElement.style.color =
		!lastPrice || lastPrice === price
			? "black"
			: price > lastPrice
			? "green"
			: "red";
	lastPrice = price;
};
