import React from "react";
import { Route, Routes } from "react-router-dom";
import Trip from "./Components/Pages/Trip";
import PaymentConfirmation from "./Components/Pages/PaymentConfirmation";
import Payment from "./Components/Pages/Payment";
import Governate from "./Components/Pages/Governate";
import Home from "./Components/Pages/Home";
import Wishlist from "./Components/Pages/Wishlist";
import TripPaymentDetailes from "./Components/Organisms/TripPaymentDetailes";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/trip/:tripId" element={<Trip />} />
        <Route
          path="/paymentConfirmation/:bookingId"
          element={<PaymentConfirmation />}
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/payment/:bookingId" element={<Payment />} />
        <Route path="/governate/:governateId" element={<Governate />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
