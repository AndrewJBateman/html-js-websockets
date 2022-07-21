let ws1 = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
let ws2 = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockNameElement1 = document.getElementById("stock-name1");
let stockPriceElement1 = document.getElementById("stock-price1");
let stockNameElement2 = document.getElementById("stock-name2");
let stockPriceElement2 = document.getElementById("stock-price2");
let lastPrice = null;

ws1.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	console.log("stockObject: ", stockObject);

	let name = stockObject.s;
	let price = parseFloat(stockObject.p).toFixed(2);
	stockNameElement1.innerText = name;
	stockPriceElement1.innerText = price;

	stockPriceElement1.style.color =
		!lastPrice || lastPrice === price
			? "black"
			: price > lastPrice
			? "green"
			: "red";
	lastPrice = price;
};

ws2.onmessage = (event) => {
	let stockObject = JSON.parse(event.data);
	console.log("stockObject: ", stockObject);

	let name = stockObject.s;
	let price = parseFloat(stockObject.p).toFixed(2);
	stockNameElement2.innerText = name;
	stockPriceElement2.innerText = price;

	stockPriceElement2.style.color =
		!lastPrice || lastPrice === price
			? "black"
			: price > lastPrice
			? "green"
			: "red";
	lastPrice = price;
};
