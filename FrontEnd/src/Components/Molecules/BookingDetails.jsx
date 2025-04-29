import React, { useContext } from "react";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import "../Styles/molecules.css";
import { ColorContext } from '../../Context/ColorContext';
const BookingDetails = ({ icon, title, value }) => {
  const colors = useContext(ColorContext);
  return (
    <div className="booking-details-container">
      <div className="details-left">
        {icon && <div className="booking-icon">{icon}</div>}
        <Typograph variant="small" color={colors.Neutrals[4]}>
          {title}
        </Typograph>
      </div>
      <div className="details-right">
        <Typograph variant="h6" color={colors.Neutrals[2]}>
          {value}
        </Typograph>
      </div>
    </div>
  );
};

export default BookingDetails;
