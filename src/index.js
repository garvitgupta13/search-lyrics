import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <HashRouter>
    <App />
    <Footer />
  </HashRouter>,
  document.getElementById("root")
);
reportWebVitals();
