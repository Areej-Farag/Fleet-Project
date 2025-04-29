import React , {useContext} from "react";
import "../Styles/organisms.css";
import Typograph from "../Atoms/Typograph";
// import colors from "../Atoms/Colors";
import Line from "../Atoms/Lines";
import Icon from "../Atoms/Icons";
import TextWithBtn from "../Molecules/TextWithBtn";
import { CiEdit } from "react-icons/ci";
import Button from "../Atoms/Button";
import CreditCardInfoForm from "./CreditCardInfoForm";
import Select from "../Atoms/Select";
// import { FaBold } from "react-icons/fa";
import { ColorContext } from '../../Context/ColorContext';

export default function PaymentForm() {
  const colors = useContext(ColorContext);
  return (
    <div className="payment-form col-12 ">
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
          <Icon size={24} color={colors.Neutrals[4]} IconContetnt={<CiEdit />} direction="row-reverse" >
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Date
            </Typograph>
            <Typograph variant="p" color={colors.Neutrals[2] }>
              May 15 - 22, 2021
            </Typograph>
          </Icon>
          <Icon size={24} color={colors.Neutrals[4]} IconContetnt={<CiEdit />} direction="row-reverse">
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Guests
            </Typograph>
            <Typograph variant="p" color={colors.Neutrals[2]}>
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
              <Button color="white" shape="default"  size="small">
                Paypal
              </Button>
              <Button color="black" shape="default" size="small">
                Credit Card
              </Button>
            </>
          }
          direction="row-reverse"
        />
        <div className="selection-Area">
        {/* <Typograph variant="lead" color={colors.Neutrals[4]}>saved contact info</Typograph> */}
        <Select label={"Saved contact info"} options={["Visa", "MasterCard", "PayPal"]}></Select>
        </div> 
      </div>
      <Line/>
      <CreditCardInfoForm></CreditCardInfoForm>
    </div>
  );
}
