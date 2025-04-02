import React from "react";
import "../Styles/organisms.css";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import Line from "../Atoms/Lines";
import Icon from "../Atoms/Icons";
import TextWithBtn from "../Molecules/TextWithBtn";
import { CiEdit } from "react-icons/ci";
import Button from "../Atoms/Button";
import CreditCardInfoForm from "./CreditCardInfoForm";


export default function PaymentForm() {
  return (
    <div className="payment-form">
      <div className="title-container">
        <Typograph variant="h4" color={colors.Neutrals[2]}>
          Confirm and pay
        </Typograph>
        <Line height="1px" />
      </div>
      <div className="trip-details">
        <Typograph variant="h5" color={colors.Neutrals[2]}>
          Your trip
        </Typograph>
        <div className="detailsIcons">
          <Icon size={24} color={colors.Neutrals[2]} IconContetnt={<CiEdit />}>
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Date
            </Typograph>
            <Typograph variant="h6" color={colors.Neutrals[2]}>
              May 15 - 22, 2021
            </Typograph>
          </Icon>
          <Icon size={24} color={colors.Neutrals[2]} IconContetnt={<CiEdit />}>
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Guests
            </Typograph>
            <Typograph variant="h6" color={colors.Neutrals[2]}>
              2 guests
            </Typograph>
          </Icon>
        </div>
      </div>
      <div className="payment-method-select">
        <TextWithBtn
          textContent={
            <Typograph variant="h5" color={colors.Neutrals[2]}>
              Pay with
            </Typograph>
          }
          btnContent={
            <>
              {" "}
              <Button color="white" shape="default">
                Paypal
              </Button>
              <Button color="black" shape="default">
                Credit Card
              </Button>
            </>
          }
          direction="row-reverse"
        />
        <div className="selection-Area">
        <Typograph variant="small" color={colors.Neutrals[4]}>saved contact info</Typograph>
        <select className="payment-select">
          <option>Visa</option>
          <option>MasterCard</option>
          <option>PayPal</option>
        </select>
        </div> 
      </div>
      <Line/>
      <CreditCardInfoForm></CreditCardInfoForm>
    </div>
  );
}
