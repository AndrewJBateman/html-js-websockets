# :zap: HTML-JS-Websocket

* HTML-Javascript app using Websockets to connect to the [Binance](www.binance.com) web server and display dynamic financial data.

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/html-js-websocket?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/AndrewJBateman/html-js-websocket?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/html-js-websocket?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/html-js-websocket?style=plastic)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AndrewJBateman/ionic-angular-world-data?style=plastic)

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

* Financial data received from [Binance](www.binance.com)

## :camera: Screenshots

![Example screenshot](./img/data.png).

## :signal_strength: Technologies

* [HTML5](https://html.spec.whatwg.org/)
* [Websocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) communication session
* [Binance Websocket Streams](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md) base endpoint: wss://stream.binance.com:9443

## :floppy_disk: Setup

* Run using a live server such as the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## :computer: Code Examples

* extract from `app.js` to assign [innertext](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) to HTML elements.

```javascript
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
```

## :cool: Features

* Websockets is easy to use

## :clipboard: Status & To-do list

* Status: Working
* To-do: Expand data shown. Consider unsubscribing

## :clap: Inspiration

* [Morgan Page: Real-Time Crypto Prices using the Binance API with JavaScript & Websockets](https://www.youtube.com/watch?v=XXuUNZIQUVA)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
