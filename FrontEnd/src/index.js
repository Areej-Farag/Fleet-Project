import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Trip from "./Components/Pages/Trip";
import PaymentConfirmation from "./Components/Pages/PaymentConfirmation";
import Payment from "./Components/Pages/Payment";
import Governate from "./Components/Pages/Governate";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Trip/:tripId" element={<Trip />} />
      <Route
        path="/PaymentConfirmation/:bookingId"
        element={<PaymentConfirmation />}
      />
      <Route path="/Payment/:bookingId" element={<Payment />} />
      <Route path="/Governate/:governateId" element={<Governate />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
