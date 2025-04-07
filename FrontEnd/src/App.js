import React from "react";
import BookingConfirmationTemplate from "./Components/Templates/BookingConfirmationTemplate";
import PaymentTemplate from "./Components/Templates/PaymentTemplate"; // تأكد من استيراد المكون

function App() {
  return (
    <>
      <div className="App container mt-5">
        <BookingConfirmationTemplate />
      </div>
      <PaymentTemplate />
    </>
  );
}

export default App;

