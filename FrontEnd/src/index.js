import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Governate from "./Components/Pages/Governate";
import Trip from "./Components/Pages/Trip";
import PaymentConfirmation from "./Components/Pages/PaymentConfirmation";
import Payment from "./Components/Pages/Payment";
import SignInForm from "./Components/Organisms/SignInForm";
import SignUpForm from "./Components/Organisms/SignUpForm";
import UserConfirmation from "./Components/Organisms/UserConfirmation";
import SecurityCode from "./Components/Organisms/SecurityCode";
import Home from "./Components/Pages/Home";
import WishlistPage from "./Components/Pages/Wishlist.jsx";
document.body.classList.add("dark");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignInForm />} />
      <Route path="signup" element={<SignUpForm />} />
      <Route path="userConfirmation" element={<UserConfirmation />} />
      <Route path="securityCode" element={<SecurityCode />} />
      <Route path="trip/:tripId" element={<Trip />} />
      <Route path="paymentConfirmation/:bookingId" element={<PaymentConfirmation />} />
      <Route path="payment/:bookingId" element={<Payment />} />
      <Route path="governate/:governateId" element={<Governate />} />
      <Route path="/wishlist/:userId" element={<WishlistPage />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Route>
  </Routes>
</BrowserRouter>

);

reportWebVitals();
