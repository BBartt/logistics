import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import App from "./App";
import "./styles/index.scss";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    </BrowserRouter> */}
    <App />

    {/* <Header /> */}
  </React.StrictMode>
);
