import React from "react";

import PaymentTemplate  from "./Components/Templates/PaymentTemplate";
import BookingConfirmationTemplate from "./Components/Templates/BookingConfirmationTemplate";
import SignUpForm from "./Components/Organisms/SignUpForm";
import DigitedInput from "./Components/Atoms/DigitedInput";
function App() {
  return (

    <>
    <DigitedInput />
    <PaymentTemplate/>
    <BookingConfirmationTemplate />
    </>
  );
}

export default App;

