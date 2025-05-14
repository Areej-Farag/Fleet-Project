import React from "react";
import CardSection from "../Organisms/CardSection";
import Typograph from "../Atoms/Typograph";
import "../Styles/templates.css";

const TripTemplate = ({ trips, selectedCategory }) => {
  // Filter trips based on selectedCategory
  const filteredTrips =
    selectedCategory === "All"
      ? trips
      : trips.filter((trip) => trip.category === selectedCategory);

  return (
    <div className="trip-template">
      <div className="card-head">
        <Typograph variant="h4" bold="True" className="section-title">
          {filteredTrips.length > 0
            ? `${filteredTrips.length} Trips Available`
            : "No Trips Found"}
        </Typograph>
      </div>
      <CardSection TripsApi={filteredTrips} />
    </div>
  );
};

export default TripTemplate;