import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
