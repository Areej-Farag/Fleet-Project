// src/Components/Templates/TripDetailsTemplate.js
import React from "react";
import TripDetails from "../Organisms/TripDetails";
import TripPaymentDetailes from "../Organisms/TripPaymentDetailes";
import "../Styles/templates.css";

const TripDetailsTemplate = ({ trip }) => {
  return (
    <div className="trip-details-template">
      <div className="trip-details-left">
        <TripDetails trip={trip} />
      </div>
      <div className="trip-details-right">
        <TripPaymentDetailes />
      </div>
    </div>
  );
};

export default TripDetailsTemplate;