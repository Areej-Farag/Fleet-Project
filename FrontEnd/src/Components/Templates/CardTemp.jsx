// src/Components/Templates/CardTemp.js
import React from "react";
import CardSection from "../Organisms/CardSection";
import "../Styles/templates.css";
import Typograph from "../Atoms/Typograph";
import { useParams } from "react-router-dom";
import { trips } from "../../Mocks/Trips";
import { cities as governates } from "../../Mocks/Governates";

const TripTemplate = ({ selectedCategory }) => {
  const { governateId } = useParams();

  const selectedGovernate = governates.find(
    (gov) => (gov.id || gov.gov_id) === governateId
  );

  const governateTrips = trips.filter(
    (trip) => trip.governate === selectedGovernate?.name
  );

  // فلتر الرحلات بناءً على الـ category المختارة
  const filteredTrips =
    selectedCategory === "All"
      ? governateTrips
      : governateTrips.filter((trip) => trip.category === selectedCategory);

  return (
    <div className="trip-template">
      <div className="card-head">
        <Typograph variant="h4" bold="True" className="section-title">
          {selectedGovernate
            ? `${filteredTrips.length} Trips Available`
            : "No Trips Found"}
        </Typograph>
      </div>
      <CardSection trips={filteredTrips} />
    </div>
  );
};

export default TripTemplate;