# :zap: HTML-JS-Websockets

* HTML-Javascript app using Websockets to connect to the [Binance](www.binance.com) web server and display dynamic financial data.
* * **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/html-js-websockets?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/html-js-websockets?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/html-js-websockets?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/html-js-websockets?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Cryptocurrency data received from [Binance](www.binance.com)

## :camera: Screenshots

![Example screenshot](./img/list.png).

## :signal_strength: Technologies

* [HTML5](https://html.spec.whatwg.org/) markup language
* [Websockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) communication session
* [Binance Websocket Streams](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md) base endpoint: wss://stream.binance.com:9443

## :floppy_disk: Setup

* Display the HTML file using a live server such as the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
* The template price data updates automatically due to the Websockets communication channel [onmesssage event handler](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage).

## :computer: Code Examples

* extract from `app.js` to assign [innertext](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) to HTML elements.

```javascript
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
```

## :cool: Features

* Websockets are easy to use

## :clipboard: Status & To-do list

* Status: Working
* To-do: Expand data shown and convert to tqble

## :clap: Inspiration

* [Morgan Page: Real-Time Crypto Prices using the Binance API with JavaScript & Websockets](https://www.youtube.com/watch?v=XXuUNZIQUVA)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
