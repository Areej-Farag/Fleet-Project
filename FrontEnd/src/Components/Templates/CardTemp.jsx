import React, { useEffect, useState } from "react";
import CardSection from "../Organisms/CardSection";
import Typograph from "../Atoms/Typograph";
import "../Styles/templates.css";
import useTripsStore from "../../Reducers/TripsStore";

const TripTemplate = ({ trips, selectedCategory }) => {
  const { fetchTripByIdWithReturn, loading, error } = useTripsStore();
  const [tripsDetails, setTripsDetails] = useState([]);

  const GetTripsinTemp = async () => {
    const tripPromises = trips.map(async (trip) => {
      const details = await fetchTripByIdWithReturn(trip.id);
      return details;
    });
    const fetchedTrips = await Promise.all(tripPromises);
    console.log("fetchedTrips from temb", fetchedTrips);
    setTripsDetails(fetchedTrips);
  };

  useEffect(() => {
    GetTripsinTemp();
    console.log("tripsDetails in temp", tripsDetails);
  }, [trips]);

  const filteredTrips =
    selectedCategory === "All"
      ? tripsDetails
      : tripsDetails.filter((trip) => trip.category === selectedCategory);

  return (
    <div className="trip-template">
      <div className="card-head">
        <Typograph variant="h4" bold="True" className="section-title">
          {filteredTrips.length > 0
            ? `${filteredTrips.length} Trips Available`
            : "No Trips Found"}
        </Typograph>
      </div>
      {console.log("Filtered Trips in Gov", filteredTrips)}
      <CardSection trips={filteredTrips} />
    </div>
  );
};

export default TripTemplate;
