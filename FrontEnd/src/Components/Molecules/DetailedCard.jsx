import React from "react";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import DetailedCard from "../Molecules/DetailedCard";
import "../Styles/organisms.css";
import {
  FaWifi,
  FaSnowflake,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

export default function Wishlist() {
  const amenities = [
    { icon: <FaWifi />, text: "Wi-Fi" },
    { icon: <FaSnowflake />, text: "AC" },
    { icon: <FaSwimmingPool />, text: "Pool" },
    { icon: <FaUtensils />, text: "Restaurant" },
  ];

  const recommendations = [
    {
      imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      badgeText: "Popular",
      title: "Nature House",
      amenities,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      badgeText: "New",
      title: "Urban Apartment",
      amenities,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      badgeText: "Top Rated",
      title: "Luxury Villa",
      amenities,
    },
  ];

  return (
    <div className="container booking-wrapper py-5">
      {/* Header */}
      <div className="mb-4">
        <Typograph variant="h3" bold={true}>
          Bookings
        </Typograph>
        <Typograph variant="small" color="#888">
          You added 8 items to wishlist
        </Typograph>
      </div>

      {/* Flight details */}
      <div className="flight-card shadow-sm rounded-4 p-4 mb-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div>
            <span className="airline-badge">Emirates</span>
          </div>
          <div>
            <strong>AKL</strong> <br />
            <span className="text-muted small">6:05 AM</span>
          </div>
          <div>
            <strong>SGN</strong> <br />
            <span className="text-muted small">9:45 AM</span>
          </div>
          <div>
            <Button color="blue" size="default" shape="default">
              View detail
            </Button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <Typograph variant="h4" bold={true}>
          You may also like
        </Typograph>
        <Typograph variant="small" color="#888">
          Let’s go on an adventure
        </Typograph>

        <div className="row mt-4">
          {recommendations.map((rec, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <DetailedCard {...rec} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
