import React from "react";
import ReactDOM from "react-dom";

// css and icons
import "normalize.css";
import "./theme/icons";

// App.js
import App from "./App";

import reportWebVitals from "./reportWebVitals";

// serviceworker
import * as serviceWorker from "./serviceWorker";

// .env config
import dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
