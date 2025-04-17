import React from "react";
import InputField from "../Atoms/InputField";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";

export default function CreditCardInfoForm() {
  return (
    <div className="credit-card-form">
      <form action="">  
        <InputField
          type={"text"}
          labelTitle={"Card Number"}
          placeholder={"0000 0000 0000 0000"}
          hasButton={false}
          rounded = {false}
        />
        <InputField
          type={"text"}
          labelTitle={"Card Holder"}
          placeholder={"Enter your name"}
          hasButton={false}
          rounded = {false}

        />
      <div className="d-flex card-expiration">
      <InputField 
          type={"text"}
          labelTitle={"Expiration Date"}
          placeholder={"MM/YY"}
          hasButton={false}
          rounded = {false}

        />
        <InputField
          type={"text"}
          labelTitle={"CVV"}
          placeholder={"000"}
          hasButton={false}
          rounded = {false}
        />
      </div>
      <div className="checkbox">
         <InputField 
          type={"checkbox"}
          labelTitle={" Save card"}
          hasButton={false}
          rounded = {false}
        />
     
      </div>
        <Typograph variant="h5">Message the host</Typograph>
        <textarea placeholder="Additional Notes" cols={40} rows={7}></textarea>
        <Link to="/paymentConfirmation/:bookingId"> <Button color="blue" size="default" shape="default">
          {" "}
          Confirm and pay
        </Button> </Link>
        
      </form>
    </div>
  );
}
