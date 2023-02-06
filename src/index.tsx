import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";
import Providers from "./contexts/Providers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
      <ToastContainer autoClose={2000} theme="colored" />
    </BrowserRouter>
  </React.StrictMode>
);
