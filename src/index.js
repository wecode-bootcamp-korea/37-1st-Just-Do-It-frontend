import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./styles/reset.scss";
import "./styles/common.scss";
import "./styles/variables.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Router />
    <Footer />
  </BrowserRouter>
);
