import React from "react";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import "../Styles/molecules.css";

const BookingDetails = ({ icon, title, value }) => {
  return (
    <div className="booking-details">
      <div className="booking-details-content">
        {icon && <div className="booking-icon">{icon}</div>}
        <Typograph variant="small" color={colors.Neutrals[4]}>
          {title}
        </Typograph>
      </div>
      <div>
        <Typograph variant="h6" color={colors.Neutrals[2]}>
          {value}
        </Typograph>
      </div>
    </div>
  );
};

export default BookingDetails;
