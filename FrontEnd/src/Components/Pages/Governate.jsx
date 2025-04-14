import React from "react";
import TripTemplate from "../Templates/CardTemp";
import NearbyGovernoratesSectionTemplate from "../Templates/NearbyGovernoratesSectionTemplate";
import { governates } from "../../Mocks/Governates";
import CityOverview from "../Templates/CityOverview"

const TripsPage = () => {
  return (
    <div className="trips-page">
      <TripTemplate />
      <NearbyGovernoratesSectionTemplate
        governorates={governates}
        sectionTitle="Expolre Trips In Egypt"
      />
      <CityOverview description="“Explore Northland’s stunning beaches, lush forests, and rich Māori heritage. Sail through the Bay of Islands, visit ancient Kauri trees, and soak in endless adventures. Experience the magic of New Zealand’s Winterless North!”" videoUrl="https://youtu.be/au8hr-0c92I?si=aBbrDfO5WEKFJgtZ"/>
    </div>
  );
};

export default TripsPage;