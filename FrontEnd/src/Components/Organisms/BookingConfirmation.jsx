import React from "react";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import colors from "../Atoms/Colors";
import HostSection from "../Molecules/HostSection";
import Rate from "../Atoms/Rate";
import "../Styles/templates.css";
import { SlCalender } from "react-icons/sl";
import { HiOutlineCreditCard } from "react-icons/hi";
import { FiHash } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import BookingDetails from "../Molecules/BookingDetails";

export default function BookingConfirmation() {
  return (
    <div className="col-md-6 col-12 p-2 d-flex flex-column justify-content-between w-50 ">
      <div>
        <Typograph variant="h3" color={colors.Neutrals[1]} bold={true}>
          Congratulation!
        </Typograph>
        <Typograph variant="p" color={colors.Neutrals[4]}>
          Your trip has been booked! 🎉
        </Typograph>

        {/* استدعاء الـ HostSection */}
        <div>
          <HostSection
            AvatarSrc={require("../../Images/avatar.png")}
            HostName="Zoe Towne"
            AvatarSize="small"
            PropertyName="Spectacular views of Queenstown"
          ></HostSection>
        </div>
      </div>

      <div
        className="d-flex rate-container align-items-center"
        style={{ gap: "8px" }}
      >
        <Rate rating={"4.8"} />
        <div className="d-flex review-count">
          <Typograph variant={"small"} color={colors.Neutrals[4]}>
            (12 reviews)
          </Typograph>
        </div>
        <div className="d-flex justify-content-center w-100">
          <Typograph variant={"small"} color={colors.Neutrals[4]}>
            {" "}
            1 bedroom , 1 private bath
          </Typograph>
        </div>
      </div>

      <div className="d-flex gap-5 mt-3 flex-wrap">
        <div>
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Dates
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            May 15 - 22, 2021
          </Typograph>
        </div>
        <div>
          <Typograph variant="small" color={colors.Neutrals[4]}>
            Guests
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            2 guest
          </Typograph>
        </div>
      </div>
      <div>
        <Typograph variant="h5" color={colors.Neutrals[2]} bold={true}>
          Booking details
        </Typograph>
      </div>

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

      <div className="mt-4 d-flex gap-2 justify-content-end flex-wrap">
        <Button color="white" size="default">
          Your trip
        </Button>
        <Button color="blue" size="default">
          Explore things to do
        </Button>
      </div>
    </div>
  );
}
