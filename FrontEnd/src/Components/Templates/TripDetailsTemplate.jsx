// src/Components/Templates/TripDetailsTemplate.js
import React from "react";
import TripDetails from "../Organisms/TripDetails";
import TripPaymentDetailes from "../Organisms/TripPaymentDetailes";
import "../Styles/templates.css";
import AnimatedSection from "../Atoms/AnimationSection";

const TripDetailsTemplate = ({ trip }) => {
  return (
  
    <div className="trip-details-template">
      <AnimatedSection delay={0.2}>
      <div className="trip-details-left">
        <TripDetails trip={trip} />
      </div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
      <div className="trip-details-right">
        <TripPaymentDetailes trip={trip} />
      </div>
      </AnimatedSection>
    </div>

  );
};

export default TripDetailsTemplate;