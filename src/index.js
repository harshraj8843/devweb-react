import React from "react";
import ReactDOM from "react-dom";

// css and icons
import "normalize.css";
import "./theme/icons";

// App.js
import App from "./App";

// serviceworker
import * as serviceWorker from "./serviceWorker";

// .env config
import dotenv from "dotenv";
dotenv.config();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
