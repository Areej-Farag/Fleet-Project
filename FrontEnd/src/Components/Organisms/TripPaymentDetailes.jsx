import React, { useState } from "react";
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
import Select from "../Atoms/Select";
import { trips } from "../../Mocks/Trips";
import Button from "../Atoms/Button";
import { Link, useParams } from "react-router-dom";

export default function TripPaymentDetailes({
  trip = trips[0],
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [selectedGuests, setSelectedGuests] = useState("");
  const bookingData = [
    {
      title: "Initial price",
      value: `$${+trip.price}`,
    },
    {
      title: "Discount amount",
      value: `-$${+trip.price - +trip.discount}`,
    },
    {
      title: "Total price",
      value: `$${trip.discount}`,
    },
  ];
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const found = trip.availableDates.find((d) => d.date === date);
    setAvailableSeats(found ? found.availableSeats : 0);
    setSelectedGuests(""); // إعادة تعيين الضيوف لما التاريخ يتغير
  };

  const handleGuestChange = (guests) => {
    setSelectedGuests(guests);
  };
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
          />
          <div className="d-flex rate-container">
            <Rate rating={trip.rating} />
            <div className="d-flex review-count">
              <Typograph variant={"small"} color={colors.Neutrals[4]}>
                {`${trip .reviews.length} reviews`}
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
          <Select
            label="Select a date"
            value={selectedDate}
            options={trip.availableDates.map((dateObj) => dateObj.date)}
            onChange={handleDateChange}
          />
        </Icon>
        <Icon
          size={24}
          color={colors.Neutrals[3]}
          IconContetnt={<IoPersonOutline />}
          direction="row-reverse"
        >
          {selectedDate ? (
            <>
              <Select
                label="Number of Guests"
                value={selectedGuests}
                options={Array.from(
                  { length: availableSeats },
                  (_, i) => `${i + 1}`
                )}
                onChange={handleGuestChange}
              />
            </>
          ) : (
            <Typograph variant="tiny" color={colors.Neutrals[2]}>
              Select a date first
            </Typograph>
          )}
        </Icon>
      </div>

      <div className="price-details-container">
        <Typograph variant={"h5"} color={colors.Neutrals[2]} bold={true}>
          Price details{" "}
        </Typograph>
        <div className="paymment-details">
          <div className="Price-details">
            {bookingData.map((item, index) => (
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
      <div className="buttonsCont">
        <Link to={`/payment/${trip.id}`}>
          <Button color="blue" size="defaultt" shape="default">
            {" "}
            Book{" "}
          </Button>
        </Link>
        <Button color="black" size="defaultt" shape="default">
          {" "}
          + Save{" "}
        </Button>
      </div>
    </div>
  );
}