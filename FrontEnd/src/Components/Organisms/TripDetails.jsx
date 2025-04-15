import React from "react";
import Typograph from "../Atoms/Typograph";
import "../Styles/organisms.css"; 
import { AiOutlineCheck } from "react-icons/ai"; 

const TripDetails = ({ trip }) => {
  return (
    <div className="trip-details">
      
      <Typograph variant="h5" bold="True" className="trip-details-title">
        {trip.name}
      </Typograph>

      
      <div className="trip-meta">
        <Typograph  variant="small" className="trip-meta-item">
          Category: {trip.category}
        </Typograph>
        <Typograph variant="small" className="trip-meta-item">
          Duration: {trip.duration}
        </Typograph>
      </div>

      
      <Typograph variant="p" className="trip-details-description">
        {trip.description}
      </Typograph>


      <div className="trip-details-amenities">
        <Typograph variant="h5" bold="True" className="amenities-title">
          Amenities
        </Typograph>
        <div className="amenities-list">
          {trip.features.map((feature, index) => (
            <div key={index} className="amenity-item">
              <span className="amenity-icon">
                <AiOutlineCheck style={{ color: "var()", fontSize: "20px" }} />
              </span>
              <Typograph className="feature-text" variant="button">{feature}</Typograph>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;