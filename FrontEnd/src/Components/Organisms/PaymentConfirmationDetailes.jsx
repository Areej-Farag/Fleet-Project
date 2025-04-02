import React from "react";
import "../Styles/organisms.css";
import ImageComponent from "../Atoms/ImageComponent";
import LocationPhoto from "../../Images/primary img.png";
import HostSection from "../Molecules/HostSection";
import AvatarPhoto from "../../Images/avatar.png";
import Rate from "../Atoms/Rate";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import Icon from "../Atoms/Icons";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";

export default function PaymentConfirmationDetailes() {
  return (
    <div className="payment-confirmation-detailes">
      <div className="Photo-and-host-sec d-flex">
        <div className="photo-container w-50 p-2">
          <ImageComponent src={LocationPhoto} title={"Image Title"} />
        </div>
        <div className="host-container w-50 p-2">
          <HostSection
            AvatarSrc={AvatarPhoto}
            HostName={"Anastasia"}
            AvatarSize={"small"}
            PropertyName={"Villa in the Forest"}
            childern={
              <>
                <Rate rating={"4.8"} />
                <Typograph variant={"small"} color={colors.Neutrals[4]}>
                  (12 reviews)
                </Typograph>
              </>
            }
          />
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
          <Typograph variant="h6" color={colors.Neutrals[2]}>
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
          <Typograph variant="h6" color={colors.Neutrals[2]}>
            2 guests
          </Typograph>
        </Icon>
      </div>
      <div className="paymment-details">
        <p>GGGG</p>
        <p>GGg</p>
        <p>GGG</p>
        <p>g</p>
        <p>RRR</p>
      </div>
      <Typograph variant={"small"} color={colors.Neutrals[2]}>
        {" "}
        Free cancellation until 3:00 PM on May 15, 2021
      </Typograph>
    </div>
  );
}
