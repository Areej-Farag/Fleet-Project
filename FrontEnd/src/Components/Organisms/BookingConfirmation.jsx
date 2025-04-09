import React from "react";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import colors from "../Atoms/Colors";
import HostSection from "../Molecules/HostSection";
import Rate from "../Atoms/Rate";
import { SlCalender } from "react-icons/sl";
import { HiOutlineCreditCard } from "react-icons/hi";
import { FiHash } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import BookingDetails from "../Molecules/BookingDetails";
import "../Styles/organisms.css";

export default function BookingConfirmation() {
  return (
    <div className="col-12 col-md-6 p-3  d-flex flex-column justify-content-between w-100">
      <div>
        <Typograph
          variant="h3"
          color={colors.Neutrals[1]}
          bold={true}
          className="congratulations-text"
        >
          Congratulation!
        </Typograph>
        <Typograph variant="p" color={colors.Neutrals[4]}>
          Your trip has been booked! 🎉
        </Typograph>

        {/*  Info HostSection */}
        <div className="mt-3">
          <HostSection
            AvatarSrc={require("../../assets/Images/avatar.png")}
            HostName="Zoe Towne"
            AvatarSize="small"
            PropertyName="Spectacular views of Queenstown"
          ></HostSection>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap mt-4 mb-2">
        <Rate rating={"4.8"} />
        <div className="d-flex align-items-center gap-1">
          <Typograph variant={"small"} color={colors.Neutrals[4]}>
            (256 reviews)
          </Typograph>
        </div>

        <Typograph variant={"small"} color={colors.Neutrals[4]}>
          1 bedroom, 1 private bath
        </Typograph>
      </div>

      <div className="d-flex justify-content-between flex-wrap mt-2 ">
        <div className="mb-2">
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Dates
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            May 15 - 22, 2021
          </Typograph>
        </div>
        <div className="mb-2">
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Guests
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            2 guest
          </Typograph>
        </div>
      </div>

      <div className="mt-3">
        <Typograph variant="h5" color={colors.Neutrals[2]} bold={true}>
          Booking details
        </Typograph>

        {/*  استدعاءBookingDetails */}
        <div className="mt-3 d-flex flex-column gap-3">
          <BookingDetails
            icon={<FiHash />}
            title="Booking code:"
            value="U18_L50989"
          />
          <BookingDetails
            icon={<LuCalendarClock />}
            title="Date:"
            value="30 Apr, 2021"
          />

          <BookingDetails icon={<SlCalender />} title="Total:" value="$833" />

          <BookingDetails
            icon={<HiOutlineCreditCard />}
            title="Payment method:"
            value="Credit card"
          />
        </div>
      </div>

      <div className="mt-4 d-flex flex-column flex-md-row gap-2 justify-content-end">
        <Button color="white" size="default" className="w-100 w-md-auto">
          Your trip
        </Button>
        <Button color="blue" size="default" className="w-100 w-md-auto">
          Explore things to do
        </Button>
      </div>
    </div>
  );
}
