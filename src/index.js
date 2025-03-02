import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// css stylesheets
import "./index.css";

// components
import App from "./containers/App/App";

// service worker
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/">
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
