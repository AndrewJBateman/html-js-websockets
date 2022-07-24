let stockStreams = [
	"ethbtc@miniTicker", "bnbbtc@miniTicker", "wavesbtc@miniTicker", "bchabcbtc@miniTicker",
	"bchsvbtc@miniTicker", "xrpbtc@miniTicker", "tusdbtc@miniTicker", "eosbtc@miniTicker",
	"trxbtc@miniTicker", "ltcbtc@miniTicker", "xlmbtc@miniTicker", "bcptbtc@miniTicker",
	"adabtc@miniTicker", "zilbtc@miniTicker", "xmrbtc@miniTicker", "stratbtc@miniTicker",
	"zecbtc@miniTicker", "qkcbtc@miniTicker", "neobtc@miniTicker", "dashbtc@miniTicker", "zrxbtc@miniTicker"
];

let ws1 = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
let ws2 = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let ws3 = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");
let stockNameElement1 = document.getElementById("stock-name1");
let stockPriceElement1 = document.getElementById("stock-price1");
let stockNameElement2 = document.getElementById("stock-name2");
let stockPriceElement2 = document.getElementById("stock-price2");
let lastPrice = null;

// ws1.onmessage = (event) => {
// 	let stockObject = JSON.parse(event.data);
// 	console.log("stockObject: ", stockObject);

// 	let name = stockObject.s;
// 	let price = parseFloat(stockObject.p).toFixed(2);
// 	stockNameElement1.innerText = name;
// 	stockPriceElement1.innerText = price;

// 	stockPriceElement1.style.color =
// 		!lastPrice || lastPrice === price
// 			? "black"
// 			: price > lastPrice
// 			? "green"
// 			: "red";
// 	lastPrice = price;
// };

// ws2.onmessage = (event) => {
// 	let stockObject = JSON.parse(event.data);
// 	console.log("stockObject: ", stockObject);

// 	let name = stockObject.s;
// 	let price = parseFloat(stockObject.p).toFixed(2);
// 	stockNameElement2.innerText = name;
// 	stockPriceElement2.innerText = price;

// 	stockPriceElement2.style.color =
// 		!lastPrice || lastPrice === price
// 			? "black"
// 			: price > lastPrice
// 			? "green"
// 			: "red";
// 	lastPrice = price;
// };

ws3.onmessage = (event) => {
	try {
		let stockObject = JSON.parse(event.data);
		if (Array.isArray(stockObject)) {
			for (let stock of stockObject) {
				handleStock(stock)
			}
		} else {
			handleStock(stockObject)
		}
	} catch (e) {
		console.log("An error occured: ", event.data, e)
	}
}

// extract stock symbol
// add stock name to stockStreams array if not there already then display name, volume traded and close price
const handleStock = (stock) => {
	const stockStream = stock.s // e.g. RNDRBUSD
	const stockStreamClose = stock.c // close price

	if (stockStreams.indexOf(stockStream) === -1) {
		document.getElementById('stockStreams').innerHTML += '<br/>' + stockStream + ': <span id="stockStream_' + stockStream + '"></span>' + ': <span id="stockStreamClose' + stockStream + '"></span>';
		stockStreams.push(stockStream);
		document.getElementById('sumStreams').innerText = stockStreams.length;
	}
	document.getElementById('stockStream_' + stockStream).innerText = parseFloat(stock.v).toFixed(0);
	document.getElementById('stockStreamClose' + stockStream).innerText = parseFloat(stock.c).toFixed(2);
}