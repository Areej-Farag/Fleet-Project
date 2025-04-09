import React from "react";
import "../Styles/organisms.css";
import ImageComponent from "../Atoms/ImageComponent";
import LocationPhoto from "../../assets/Images/primary img.png";
import HostSection from "../Molecules/HostSection";
import AvatarPhoto from "../../assets/Images/avatar.png";
import Rate from "../Atoms/Rate";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import Icon from "../Atoms/Icons";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import BookingDetails from "../Molecules/BookingDetails";

const bookingData = [
  {
    title: "$119 x 7 nights",
    value: "$833",
  },
  {
    title: "10% campaign discount",
    value: "-$125",
  },
  {
    title: "Service fee",
    value: "$103",
  },
  {
    title: "Total",
    value: "$833",
  },
];
export default function PaymentConfirmationDetailes({
  BookingData = bookingData,
}) {
  return (
    <div className="payment-confirmation-detailes">
      <div className="Photo-and-host-sec row d-flex">
        <div className="photo-container col-12  p-2">
          <ImageComponent src={LocationPhoto} title={"Image Title"} />
        </div>
        <div className="host-container col-12 p-2">
          <HostSection
            AvatarSrc={AvatarPhoto}
            HostName={"Anastasia"}
            AvatarSize={"small"}
            PropertyName={"Villa in the Forest"}
            childern={
              <>
                <div className="d-flex justify-content-center w-100">
                  <Typograph variant={"small"} color={colors.Neutrals[4]}>
                    {" "}
                    1 bedroom , 1 private bath
                  </Typograph>
                </div>
              </>
            }
          />
          <div className="d-flex rate-container">
            <Rate rating={"4.8"} />
            <div className="d-flex review-count">
              <Typograph variant={"small"} color={colors.Neutrals[4]}>
                (12 reviews)
              </Typograph>
            </div>
          </div>
        </div>
      </div>
      <div className="TextedIcons-container d-flex p-2 flex-wrap">
        <Icon
          size={24}
          color={colors.Neutrals[3]}
          IconContetnt={<SlCalender />}
          direction="row-reverse"
        >
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Check In
          </Typograph>
          <Typograph variant="h6" color={colors.Neutrals[2]}>
            May 15 - 22, 2021
          </Typograph>
        </Icon>
        <Icon
          size={24}
          color={colors.Neutrals[3]}
          IconContetnt={<SlCalender />}
          direction="row-reverse"
        >
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Check Out
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            May 22 - 22, 2021
          </Typograph>
        </Icon>
        <Icon
          size={24}
          color={colors.Neutrals[3]}
          IconContetnt={<IoPersonOutline />}
          direction="row-reverse"
        >
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Guests
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            2 guests
          </Typograph>
        </Icon>
      </div>

      <div className="price-details-container">
        <Typograph variant={"h5"} color={colors.Neutrals[2]} bold={true}>
          Price details{" "}
        </Typograph>
        <div className="paymment-details">
          <div className="Price-details">
            {BookingData.map((item, index) => (
              <BookingDetails
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
      <Typograph variant={"small"} color={colors.Neutrals[2]}>
        {" "}
        Free cancellation until 3:00 PM on May 15, 2021
      </Typograph>
    </div>
  );
}
