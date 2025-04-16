import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./Components/Pages/Home";
import TripsPage from "./Components/Pages/Governate";
import Trip from "./Components/Pages/Trip";
import PaymentConfirmation from "./Components/Pages/PaymentConfirmation";
import Payment from "./Components/Pages/Payment";
import Governate from "./Components/Pages/Governate";
import GovernatesPage from "./Components/Templates/choosegover";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* هنا هنخلي الصفحة الرئيسية تعرض Home */}
        <Route index element={<Home />} /> {/* هنا صفحة الهوم */}
        
        <Route path="governates" element={<GovernatesPage />} />
        <Route path="trips/:governateId" element={<TripsPage />} />
        <Route path="trip/:tripId" element={<Trip />} />
        <Route path="paymentConfirmation/:bookingId" element={<PaymentConfirmation />} />
        <Route path="payment/:bookingId" element={<Payment />} />
        <Route path="governate/:governateId" element={<Governate />} />

        {/* صفحة 404 */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
