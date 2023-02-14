import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoneyContextProvider } from "./context/moneyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoneyContextProvider>
      <App />
    </MoneyContextProvider>
  </React.StrictMode>
);
